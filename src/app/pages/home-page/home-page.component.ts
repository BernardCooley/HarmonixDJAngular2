import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserDataService } from '../../services/user-data/user-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private $user;
  private userDjName: string;
  private tracks = [];

  constructor(private _authService: AuthService, private _userDataService: UserDataService) {

    _authService.user.subscribe(
      user => {
        this.$user = user;
        if(this.$user) {
          this.userDjName = 'Welcome ' + _userDataService.getUserDjName(this.$user.uid),
          this.tracks = _userDataService.getUserTracks(this.$user.uid)
        }
      }
    )

    

  }

  ngOnInit() {
  }

}
