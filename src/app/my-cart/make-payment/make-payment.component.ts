import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../API-Services/products/product-service';

// tslint:disable-next-line:prefer-const
declare let paypal;

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private  Cart: ProductService) {
  }

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
  product: any = [];
  ProductId = this.route.snapshot.paramMap.get('id');
  Price = this.route.snapshot.paramMap.get('price');
  paidFor = false;

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Payment For the Product',
                amount: {
                  currency_code: 'USD',
                  value: this.Price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          this.onPayment();

        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  // tslint:disable-next-line:typedef
  onPayment() {
    const id = this.ProductId;
    const pay = 'paid';
    this.Cart.addPayment(id, pay).subscribe(resDate => {
        this.router.navigate(['myCart']);
      }
    );
  }
}
