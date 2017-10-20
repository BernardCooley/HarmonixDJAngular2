import { Track } from '../../interfaces/track.interface';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import { allTracks } from '../../data/trackData';

@Injectable()
export class ListService {

  private posts;
  private tracks: any;
  
  constructor(private _http: Http) {
  }

  getTracks(listName: string): Observable<Track[]> {
    return this._http.get('../../data/trackData.json')
      .map(res => res.json());
  }

  // addTrackToCurrentSet(track: Array<any>) {
  //   this.tracks.push(track);
  //   console.log(this.tracks);
  // };

}