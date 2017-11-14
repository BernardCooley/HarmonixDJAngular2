import { Track } from '../../interfaces/track.interface';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  private posts;
  private tracks: any;
  
  constructor(private _http: Http) {
  }

  getTracksByUser(user: String) {
    return this._http.get('app/data/trackData.json')
      .map(res => res.json());  
  }

  getAllTracks() {
    return this._http.get('https://firsttestproject-9dc14.firebaseio.com/tracks.json')
      .map(res => res.json());  
  }

  // getTracks(listName: string): Observable<Track[]> {
  //   return this._http.get('app/data/trackData.json')
  //     .map(res => res.json());
  // }

  addTrackToCurrentSet(track: Array<any>) {
    this.tracks.push(track);
    console.log(this.tracks);
  };

}