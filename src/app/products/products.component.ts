import { Component, OnInit } from '@angular/core';
import {products} from './product-model';
import {NgForm} from '@angular/forms';
import { ProductService } from '../API-Services/products/product-service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;
  message = '';
  error = '';
  constructor(private product: ProductService) {  }
  get user(): any {
    return localStorage.getItem('userName');
  }
  get userEmail(): any {
    return localStorage.getItem('userEmail');
  }

  ngOnInit(): void {
  }
  addCart(form: NgForm) {
    if( !form.valid){
      return;
    }

    // tslint:disable-next-line:variable-name
    const p_name = form.value.pName;
    // tslint:disable-next-line:variable-name
    const p_des = form.value.pDes;
    // tslint:disable-next-line:variable-name
    const p_price = form.value.pPrice;

    this.product.addCart(p_name , p_des , p_price ).subscribe(resDate => {
        console.log(resDate);
        this.message = 'Product Added Successfully..';
      },
      // tslint:disable-next-line:no-unused-expression
      errorRes => {
        this.error = errorRes.error.message;
        console.log(errorRes);
      }
    );
    form.reset();
  }


}
