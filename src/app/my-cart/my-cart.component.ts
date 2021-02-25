import { Component, OnInit } from '@angular/core';
import {ProductService} from '../API-Services/products/product-service';
import {Router} from '@angular/router';
import {Cart} from './my-cart.model';
import {Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  cart: any = new Subject<Cart>();
  constructor(private  product: ProductService, private router: Router) {
    this.GetCart();
  }

  ngOnInit(): void {
  }
  GetCart(){
    this.product.getClientProducts().subscribe(data => {
      this.cart = data;
    });
  }
  payments(form: NgForm){
    const ProductId = form.value.id;
    const price = form.value.price;
    this.router.navigate( ['make-payment', ProductId, price]);
  }
}
