import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { TracksService } from '../services/tracks/tracks.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  public $user = this._authService.user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router, private _tracksService: TracksService) {
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {
    const inputValue = this.signInForm.value;
    
    this._authService.login(inputValue.username, inputValue.password)
      .subscribe(
        success => {
          this.router.navigate(['/playSet']),
          this._authService.getUID(),
          this.$user.subscribe(
            x => console.log(x.uid)
          )
          // console.log(this._tracksService.getUserDjName(this._authService.getUID()));
      },
        error => alert(error)
      );

      
      // console.log(this.$user);
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle();
  }

  ngOnInit() {
  }

}
