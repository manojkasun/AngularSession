import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const baseUrl = 'http://localhost:3000/product' ;
const ClientEmail = localStorage.getItem('userEmail');
export interface ProductResponseData{
 p_name: string;
 p_des: string;
 p_price: string;

}
@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http: HttpClient) {}



  // tslint:disable-next-line:typedef
  getClientProducts() {
    return this.http.get(`${baseUrl}/myProducts/${ClientEmail}`);
  }



  // tslint:disable-next-line:variable-name typedef
  addCart( p_name: string, p_des: string, p_price: string) {
    return this.http.post<ProductResponseData>(`${baseUrl}/addCart`,
      {
        product: p_name,
        price: p_price,
        description: p_des,
        clientId: localStorage.getItem('userEmail'),
        token: true
      });


  }

  addPayment(id: string, pay: string) {
    return this.http.put(`${baseUrl}/Payment/${id}`,
      {
        payment: pay,
      });
  }
}
