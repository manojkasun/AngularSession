import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email =  'Enter your Email';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }
  liveEmail(event: Event){
    this.email = (<HTMLInputElement>event.target).value;
  }
  livePass(event: Event){
    this.password = (<HTMLInputElement>event.target).value;
  }
  userLogin(form: NgForm) {
    if(!form.valid){
      return;
    }
  }


}
