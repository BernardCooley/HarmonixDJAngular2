import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuItemsArray: any[];
  public $user = this._authService.user;

  constructor(public router: Router, private _authService: AuthService) {
    this.menuItemsArray = [
      { 'title': 'Login', 'link': '/login' },
      { 'title': 'Register', 'link': '/register' },
      { 'title': 'Play Set', 'link': '/playSet'},
      { 'title': 'Track Management', 'link': '/trackManagement'},
      { 'title': 'Set Management', 'link': '/setManagement' },
      { 'title': 'Help', 'link': '/help' },
      { 'title': 'All Tracks', 'link': '/allTracksList' },
      { 'title': 'Logout', 'link': '/login' }
    ]
  }

  public onMenuClose() {

  }

  public onMenuOpen() {

  }

  private onItemSelect(item: any) {
    if(item.title === 'Logout') {
      this._authService.logout().subscribe(
        success => this.router.navigate(['/login']),
        error => alert(error)
      );
    }
    if(item.title === 'Login') {
      this.isLoggedIn();
    }
    this.router.navigate([item.link]);
  }

  isLoggedIn() {
    this._authService.isAuthenticated().subscribe(
      user => user ? console.log('logged in') : console.log('logged out')
      
    )}

  ngOnInit() {
  }

}
