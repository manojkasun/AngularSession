import { Component, OnInit } from '@angular/core';
import {products} from './product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert('The product iss added successfully!!');
  }

}
