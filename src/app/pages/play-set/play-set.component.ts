import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks/tracks.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-play-set',
  templateUrl: './play-set.component.html',
  styleUrls: ['./play-set.component.css']
})
export class PlaySetComponent implements OnInit {

  allTracks = [];

  constructor(_tracksService: TracksService) {
    // _tracksService.getAllTracks().subscribe(allTracks => {
    //   this.allTracks = allTracks;
    // });
  }

  ngOnInit() {
  }

}
