import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatDialog, MatPaginator, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { ViewVideoComponent } from '../view-video/view-video.component';
export interface video {  
  id:number
  name:string;
  detail:string;
  VideoUrl:string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  player: YT.Player;
  id:Array<string>;
  movielist;
  message: string;
  constructor(private movieService:MovieService,private dialog: MatDialog) { }

  dataSource:any;
  displayedColumns: string[] = ['id', 'name', 'detail','actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList(){
    this.movieService.getMovieList().subscribe(data =>{
      console.log(data)
      const videoList: video[] = [];
      this.movielist = data;
      for (let index = 0; index < this.movielist["length"]; index++) {
        videoList.push({
          id: this.movielist[index].id,
          name: this.movielist[index].name,
          detail: this.movielist[index].detail,
          VideoUrl: this.movielist[index].VideoUrl,
        })
        }  
        this.dataSource = new MatTableDataSource(videoList);
        this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onView(row){
    // send message to subscribers via observable subject
    let reg = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let id = row.VideoUrl.match(reg)[7];
    this.movieService.changeMessage(id);
    this.movieService.currentMessage.subscribe();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(ViewVideoComponent,dialogConfig);
  }

}
