import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks/tracks.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-play-set-page',
  templateUrl: './play-set-page.component.html',
  styleUrls: ['./play-set-page.component.css']
})
export class PlaySetPageComponent implements OnInit {

  allTracks = [];

  constructor(_tracksService: TracksService) {
    // _tracksService.getAllTracks().subscribe(allTracks => {
    //   this.allTracks = allTracks;
    // });
  }

  ngOnInit() {
  }

}
