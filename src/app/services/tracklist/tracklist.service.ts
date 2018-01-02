import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TracklistService {

  constructor(private _http: Http) { }

  addToTracklist(tracklistId: String) {
    // console.log('addToTracklist called');
  }

}
