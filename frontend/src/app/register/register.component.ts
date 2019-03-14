import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  constructor(private loginService:LoginService,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  save(myform:NgForm){
    this.form = myform;
    this.loginService.registerUser(this.form).subscribe(data => {
      this.snackBar.open("สมัครสำเร็จ ", 'ตกลง', {
        duration: 10000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
      console.log(data);
      this.router.navigate(['/login']);
    }, 
    error => {
      console.log(error);
      this.snackBar.open("เกิดข้อผิดพลาด", 'ตกลง', {
        duration: 10000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
    });
  }

}
