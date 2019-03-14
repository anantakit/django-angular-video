import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public API = '//localhost:8000';
  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  registerUser(myform){
    return this.http.post(this.API + '/user/',myform ,{headers: this.httpHeaders});
  }
  login(myform){
    return this.http.post(this.API + '/api/token/',myform ,{headers: this.httpHeaders});
  }
}
