import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private tracks: any;

  constructor(_listService: ListService) {

    this.tracks = _listService.getTracks();

  }

  ngOnInit() {
  }

}
