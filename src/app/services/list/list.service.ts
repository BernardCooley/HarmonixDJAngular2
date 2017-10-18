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
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
    ]

    return this.tracks;
    
    // return this._http.get(this.url)
    //   .map(res => res.json())
  }

}