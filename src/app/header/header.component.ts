import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuItemsArray: any[];

  constructor(public router: Router) {
    this.menuItemsArray = [
      { 'title': 'Login', 'link': '/login' },
      { 'title': 'Register', 'link': '/register' },
      { 'title': 'Play Set', 'link': '/playSet'},
      { 'title': 'Track Management', 'link': '/trackManagement'},
      { 'title': 'Set Management', 'link': '/setManagement' },
      { 'title': 'Help', 'link': '/help' },
      { 'title': 'All Tracks', 'link': '/allTracksList' }
    ]
  }

  public onMenuClose() {
    console.log('menu closed');
  }

  public onMenuOpen() {
    console.log('menu Opened');
  }

  private onItemSelect(item: any) {
    console.log(item);
    this.router.navigate([item.link]);
  }

  ngOnInit() {
  }

}
