import { Injectable, Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  // inputs: ['list']
})

@Injectable()
export class ListComponent implements OnInit {

  // list: string;
  @Input() listName: string;
  private list: any;
  private showTitle: boolean;
  _listService: ListService;

  constructor(_listServiceIn: ListService) {
    
    // this.tracks = _listService.getTracks();

    this.showTitle = false;

  }

  ngOnInit() {

    // console.log(this.list);

    this.loadList(this.listName);
  }

  loadList(listNameIn: string) {
    if(listNameIn == 'currentSet') {
      console.log('currentSet selected');
      this.list = [
        { 'id': 1, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
        { 'id': 2, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
        { 'id': 3, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
      ]
    }
    else if (listNameIn == 'allTracks') {
      console.log('allTracks selected');
      this.list = [
        { 'id': 14, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
        { 'id': 15, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' },
        { 'id': 16, 'title': 'Acidic Sky', 'artist': 'Tape Twelve', 'key': '11B' },
        { 'id': 17, 'title': 'Man with the red face', 'artist': 'Laurent Garnier', 'key': '05A' },
        { 'id': 18, 'title': 'Brainstorm', 'artist': 'Carl Craig', 'key': '08B' }
      ]
    };
  }

  addToLiveSet(event: Event) {
    console.log('add button clicked');
    console.log(event);
  }

  trackMenu(event: Event) {
    console.log('menu button clicked');
    console.log(event);
  }

}
