import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {userService} from '../API-Services/auth/auth-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
email = 'your email here';
password = '';
name = 'your name here';
  error = '';
  constructor(private  user: userService, private  router: Router) { }

  ngOnInit(): void {
  }

  liveName(event: Event){
    this.name = (<HTMLInputElement> event.target).value;
  }
  liveEmail(event: Event){
    this.email = (<HTMLInputElement> event.target).value;
  }
  livePass(event: Event){
    this.password = (<HTMLInputElement> event.target).value;
  }


  userSignup(form: NgForm) {
    if( !form.valid){
      return;
    }
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.user.signup(name, email, password).subscribe(resDate => {
        console.log(resDate);
        this.router.navigate(['login']);
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
