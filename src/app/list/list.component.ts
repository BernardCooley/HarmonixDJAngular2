import { Injectable, Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list/list.service';
import {Observable} from 'rxjs/Observable';
import { Track } from '../interfaces/track.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

@Injectable()
export class ListComponent implements OnInit {

  // list: string;
  @Input() listName: string;
  private list: Array<any>;
  private currentSet: Track[];
  private allTracks: Track[];
  private showTitle: boolean;
  _allTracksService: ListService;
  _currentSetService: ListService;
  private addButton: boolean;
  private deleteButton: boolean;
  private tracks: Track[];

  constructor(_allTracksService: ListService, _currentSetService: ListService) {
    
    // _allTracksService.getTracks().subscribe()

    // this.allTracks = _allTracksService.getTracks();

    this.showTitle = false;
    _currentSetService.getTracks(this.listName).subscribe(currentSet => {
      this.currentSet = currentSet;
    });
    _currentSetService.getTracks(this.listName).subscribe(allTracks => {
      this.allTracks = allTracks;
    });
  }

  ngOnInit() {
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
      this.list = this.allTracks;
    };
  }

  addToLiveSet(track: Array<any>, _allTracksService: ListService) {
    // this.currentSet.push(id);
    // console.log(this.currentSet);
    // this._allTracksService.addTrackToCurrentSet(track);
  }

  removeFromLiveSet(id: string) {
    console.log('remove');
  }
  
  trackMenu(event: Event) {
    console.log('menu button clicked');
    console.log(event);
  }

}
