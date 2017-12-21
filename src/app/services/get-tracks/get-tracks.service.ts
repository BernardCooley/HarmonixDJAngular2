import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GetTracksService {

  tracks: JSON;
  reqURL: string = 'https://api.discogs.com/artists/5/releases';

  constructor(private _http: Http) {

  }

  getTracks(): Observable<any> {
    return this._http.get(this.reqURL)
      .map(res => res.json());
  }

}
