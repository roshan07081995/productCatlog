import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  apiURL: string = 'http://localhost:8000/api/';
  isShown: boolean = false ;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }


  public register(data) {
	let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
	
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.apiURL}` + 'register', JSON.stringify({ ...data }), {
          headers: headers,
        })
        .subscribe(
          (res) => {
            resolve(res);
            console.log(res);
          },
          (err) => {
            reject(err);
            console.log(err);
          }
        );
    });
  }
  
  public login(data) {
	let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
	
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.apiURL}` + 'login', JSON.stringify({ ...data }), {
          headers: headers,
        })
        .subscribe(
          (res) => {
            resolve(res);
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
          },
          (err) => {
            reject(err);
            console.log(err);
          }
        );
    });
  }
  
  public getValue()
  {
    return this.isShown;
  }

}
