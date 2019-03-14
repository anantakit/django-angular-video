import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {  
  player: YT.Player;
  id;
  message: any;
  subscription: Subscription;

  constructor(public dialogRef: MatDialogRef<ViewVideoComponent>,private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.currentMessage.subscribe(message => this.id = message)
    console.log(this.id);
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
