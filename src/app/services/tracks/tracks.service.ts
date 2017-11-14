import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TracksService {

  constructor(private _http: Http) { }

  getAllTracks() {
    return this._http.get('https://firsttestproject-9dc14.firebaseio.com/tracks.json')
      .map(res => res.json());
  }

  

}
