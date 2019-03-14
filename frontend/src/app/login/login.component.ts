import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private loginService:LoginService,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  
  }
  
  login(myform){
    this.form = myform;
    this.loginService.login(this.form).subscribe(data => {
      let result:any = data
      // localStorage.setItem('token' ,JSON.stringify(data));
      document.cookie = 'token='+result.access;
      console.log(document.cookie)
      this.snackBar.open("ยินดีต้อนรับ ", 'ตกลง', {
        duration: 10000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
      // console.log(data);
      this.router.navigate(['/login']);
    }, 
    error => {
      console.log(error);
      this.snackBar.open("username หรือ password ผิด", 'ตกลง', {
        duration: 10000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
    });

  }
}
