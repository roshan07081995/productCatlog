import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
	 apiURL: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }
  
  public productSave(data) {
	let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
	
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.apiURL}` + 'products', JSON.stringify({ ...data }), {
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
  
}
