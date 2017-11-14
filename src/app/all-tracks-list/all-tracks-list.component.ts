import { Component, OnInit } from '@angular/core';
import { TracksService } from '../services/tracks/tracks.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-all-tracks-list',
  templateUrl: './all-tracks-list.component.html',
  styleUrls: ['./all-tracks-list.component.css']
})
export class AllTracksListComponent implements OnInit {

  allTracks = [];

  constructor(_tracksService: TracksService) {
    _tracksService.getAllTracks().subscribe(allTracks => {
      this.allTracks = allTracks;
      // console.log(this.allTracks);
    });
  }

  ngOnInit() {
  }

}
