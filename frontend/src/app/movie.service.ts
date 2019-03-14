import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public API = '//localhost:8000';
  public  token = document.cookie;
  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer "+this.token.split('=')[1]})

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject(JSON);
  currentMessage = this.messageSource.asObservable();

  getMovieList(): Observable<any> {
    this.token = document.cookie;
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer "+this.token.split('=')[1]})
    return this.http.get(this.API + '/video/' ,{headers: this.httpHeaders});
  }

  postvideo(video){
    this.token = document.cookie;
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer "+this.token.split('=')[1]})
    return this.http.post(this.API + '/video/',video ,{headers: this.httpHeaders});
  }

  changeMessage(message) {
    this.messageSource.next(message)
  }
}
