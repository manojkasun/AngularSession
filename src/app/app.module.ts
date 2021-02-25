import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MakePaymentComponent } from './my-cart/make-payment/make-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    ProductsComponent,
    SignUpComponent,
    MyCartComponent,
    MakePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
