import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-set',
  templateUrl: './play-set.component.html',
  styleUrls: ['./play-set.component.css']
})
export class PlaySetComponent implements OnInit {

  private tracks: any;

  constructor() {

    this.tracks = [
      { 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
      { 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
      { 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
    ]


  }

  ngOnInit() {
  }

}
