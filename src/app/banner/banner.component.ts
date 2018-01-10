import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TracksService } from '../services/tracks/tracks.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  private loggedInUser = '';
  private uid = ';'

  constructor(private _authService: AuthService, private _tracksService:TracksService) {
    // this.loggedInUser = _tracksService.getUserDjName('PC87zEQRGUfSL9L2PIyhbb45Bzw2');


    this._authService.getUserId().subscribe(
      x => {
        this.uid = x.uid,
        console.log(x.uid),
        console.log(this._tracksService.getUserDjName(x.uid))
      },
      success => {
        this.loggedInUser = this._tracksService.getUserDjName(this.uid),
        console.log(this.loggedInUser)
      }
      
    )


  }

  getCurrentUser() {
    // console.log(this._authService.getCurrentUser());
  }

  ngOnInit() {
  }

}
