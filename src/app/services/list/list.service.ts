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

  getTracks(): any {
    this.tracks = [
      { 'id': 77777777777777777777777777777, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 2, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 3, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'id': 4, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 5, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 6, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'id': 7, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 8, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 9, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'id': 10, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 11, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 12, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'id': 13, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 14, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 15, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'id': 16, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'id': 17, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'id': 18, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
    ]

    return this.tracks;
    
    // return this._http.get(this.url)
    //   .map(res => res.json())
  }

}