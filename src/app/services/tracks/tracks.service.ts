import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var firebase: any;

@Injectable()
export class TracksService {

  constructor(private _http: Http) { }

  getAllTracks(): Observable<any> {
    return this._http.get('https://firsttestproject-9dc14.firebaseio.com/tracks.json')
      .map(res => res.json());
  }

  // getAllTracks() {
  //   firebase.database().ref('/').on('child_added', (tracks) => {
  //     console.log(tracks.val());
  //     // return tracks.val();
  //   })
  // }

  

}
