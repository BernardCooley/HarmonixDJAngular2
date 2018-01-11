import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  private inputValue;
  private user;

  constructor() {}

  emitValue(event) {
    this.inputValue = event;
  }

  getUser(event) {
    this.user = event;
    console.log('user from container', this.user);
  }

  ngOnInit() {
  }

}
