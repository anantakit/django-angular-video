import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'frontend';

  logout(){
    document.cookie="token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.router.navigate(['/login']);
  }
  isLogin(){
    // let temp = JSON.parse(localStorage.getItem('token'));
    let temp = document.cookie;
    if(temp.split('=')[1] != null)
      return true
    return false
  }
}
