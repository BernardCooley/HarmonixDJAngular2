import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TracksService } from '../services/tracks/tracks.service';
import { UserDataService } from '../services/user-data/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuItemsArray: any[];
  public $user = this._authService.user;
  private currentUserData = {};
  private djName: string;
  private uid;

  constructor(public router: Router, private _authService: AuthService, private _tracksService: TracksService, private _userDataService: UserDataService) {
    this.menuItemsArray = [
      { 'title': 'Login', 'link': '/login' },
      { 'title': 'Register', 'link': '/register' },
      { 'title': 'Play Set', 'link': '/playSet'},
      { 'title': 'Track Management', 'link': '/trackManagement'},
      { 'title': 'Set Management', 'link': '/setManagement' },
      { 'title': 'Help', 'link': '/help' },
      { 'title': 'All Tracks', 'link': '/allTracksList' },
      { 'title': 'Logout', 'link': '/login' },
      { 'title': 'Test DB', 'link': '/register' }
    ]

  }

  getUserDjName() {
    this.uid = this._authService.getUID();

    this.djName = this._userDataService.getCurrentUserDjName(this.uid);
    console.log('dj name from header', this.djName);
  }

  public onMenuClose() {
    
  }

  public onMenuOpen() {
    this.getUserDjName();
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
    if(item.title === 'Test DB') {
      // console.log('Test DB clicked')
      // this._tracksService.writeUserData('artist 1', 'title 1');
      // this._tracksService.addNewTrack();
      // this._tracksService.addNewUserProfile(this._authService.getUID(), true, 'Tape Twelve');
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
