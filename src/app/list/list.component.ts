import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private tracks: any;
  private showTitle: boolean;

  constructor(_listService: ListService) {

    this.tracks = _listService.getTracks();

    this.showTitle = false;

  }

  ngOnInit() {
  }

  addToLiveSet(event: Event): void {
    console.log('add button clicked');
    console.log(event);
  }

  trackMenu(event: Event): void {
    console.log('menu button clicked');
    console.log(event);
  }

}
