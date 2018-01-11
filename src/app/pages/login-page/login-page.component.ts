import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { UserDataService } from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() onLogin: EventEmitter<string> = new EventEmitter<string>();
  public signInForm: FormGroup;
  public $user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router, private _userDataService: UserDataService) {
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this._authService.user.subscribe(
      user => {
        this.$user = user
        // console.log('user from login', this.$user)
      }
    )
  }

  testUser() {
    
    // console.log(this.$user);
  }

  outputTest() {
    this.onLogin.emit('output string');
  }

  login() {
    const inputValue = this.signInForm.value;
    
    this._authService.login(inputValue.username, inputValue.password)
      .subscribe(
        success => {
          this.router.navigate(['/home']),
          this._authService.getUID()
          // console.log(this._userDataService.getCurrentUserDjName(this._authService.getUID()))
          
          // this._userDataService.getCurrentUserDjName(this._authService.getUID())
      },
        error => alert(error)
      );
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle();
  }

  ngOnInit() {
  }

}
