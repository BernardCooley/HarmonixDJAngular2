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

  getTracks(listName: string): Observable<Track[]> {
    return this._http.get('app/data/trackData.json')
      .map(res => res.json());
  }

  addTrackToCurrentSet(track: Array<any>) {
    this.tracks.push(track);
    console.log(this.tracks);
  };

}