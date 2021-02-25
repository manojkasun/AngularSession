import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { userService, AuthResponseData } from '../API-Services/auth/auth-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email =  'Enter your Email';
  password = '';
error = '';
  constructor(private  user: userService, private  router: Router) { }

  ngOnInit(): void {
  }
  liveEmail(event: Event){
    this.email = (<HTMLInputElement> event.target).value;
  }
  livePass(event: Event){
    this.password = (<HTMLInputElement> event.target).value;
  }

  userLogin(form: NgForm) {
    if( !form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.pass;

    let authObs: Observable<AuthResponseData>;
    authObs =  this.user.login( email, password);

    authObs.subscribe(
      resData => {
        console.log(resData.name);
        this.router.navigate(['products']);
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
