import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Subject, throwError} from 'rxjs';
import {User} from './user-model';
import {Router} from '@angular/router';
import { tap} from 'rxjs/operators';


const baseUrl = 'http://localhost:3000';
export interface AuthResponseData{
  name: string;
  email: string;
  token: string;
}
@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class userService {
  user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) {
  }


  signup(name: string, email: string, password: string) {
    return this.http.post<AuthResponseData>(`${baseUrl}/auth/signup`,
      {
        name: name,
        email: email,
        password: password,
        token: true
      });


  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`${baseUrl}/auth/login`,
      {
        email: email,
        password: password,
        token: true
      })
      .pipe(
        tap(resData => {
          this.handleAuthentication(
            resData.name,
            resData.email,
            resData.token
          );
        })
      );
  }

  // tslint:disable-next-line:typedef
  private handleAuthentication(
    email: string,
    name: string,
    token: string
  ) {
    const user = new User(email,  name,  token);
    this.user.next(user); // send value to the user model
    localStorage.setItem('userData', JSON.stringify(user)); // this will store user details in our web browser . sessions and cookies
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
  }
  public isAuthenticated(): Boolean {
    const userData = localStorage.getItem('userData');
    if (userData && JSON.parse(userData) ){
      return true;
    }
    return false;
  }

}
