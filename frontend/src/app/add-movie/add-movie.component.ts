import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  form;
  constructor(private movieService:MovieService,private router:Router,private snackBar: MatSnackBar,) { }
  
  ngOnInit() {
    
  }

  save(myform:NgForm){
    this.form = myform;
    this.movieService.postvideo(this.form).subscribe(data => {
      this.snackBar.open("เพิ่มวิดีโอแล้ว ", 'ตกลง', {
        duration: 10000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
      console.log(data);
      this.router.navigate(['/movie-list']);
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

  checkUrlMedia(url){
    console.log('url:' +url)
    let reg = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let id = url.match(reg)[7];
    console.log('id:'+id );
  }

}
