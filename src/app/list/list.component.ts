import { Injectable, Component, OnInit, Input } from '@angular/core';
import { TracksService } from '../services/tracks/tracks.service';
import { TracklistService } from '../services/tracklist/tracklist.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

@Injectable()
export class ListComponent implements OnInit {

  allTracks = [];

  constructor(private _tracksService: TracksService, private _tracklistService: TracklistService) {
    _tracksService.getAllTracks().subscribe(allTracks => {
      this.allTracks = allTracks;
      // console.log(this.allTracks);
    });

    // _tracksService.getAllTracks();
  }

  addToTracklist(track: any) {
    // console.log(track);
    this._tracklistService.addToTracklist('rgreg');
  }

  removeFromLiveSet(id: string) {
    // console.log('remove');
  }
  
  trackMenu(event: Event) {
    // console.log('menu button clicked');
    // console.log(event);
  }

  ngOnInit() {
  }

}
