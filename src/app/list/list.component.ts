import { Injectable, Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list/list.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
  // inputs: ['list']
})

@Injectable()
export class ListComponent implements OnInit {

  // list: string;
  @Input() listName: string;
  private list: Array<any>;
  private currentSet: Array<any>;
  private allTracks: Array<any>;
  private showTitle: boolean;
  _listService: ListService;
  private addButton: boolean;
  private deleteButton: boolean;

  constructor(_listServiceIn: ListService) {
    
    // this.tracks = _listService.getTracks();

    this.showTitle = false;
    this.currentSet = [];
    this.allTracks = [];
  }

  ngOnInit() {

    // console.log(this.list);

    this.loadList(this.listName);
  }

  loadList(listNameIn: string) {
    if(listNameIn == 'currentSet') {
      this.addButton = false;
      this.deleteButton = true;
      this.list = this.currentSet;
    }
    else if (listNameIn == 'allTracks') {
      this.addButton = true;
      this.deleteButton = false;
      this.allTracks = [
        { 'id': 14, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
        { 'id': 15, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
        { 'id': 16, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
        { 'id': 17, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
        { 'id': 18, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
      ];
      this.list = this.allTracks;
    };
  }

  addToLiveSet(id: string) {
    this.currentSet.push(id);
    console.log(this.currentSet);
    // console.log(this.allTracks[0]);
  }

  removeFromLiveSet(id: string) {
    console.log('remove');
  }
  

  trackMenu(event: Event) {
    console.log('menu button clicked');
    console.log(event);
  }

}
