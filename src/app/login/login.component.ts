import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user$ = this._authService.user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router) {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    _authService.isAuthenticated().subscribe(
      success => console.log('logged in'),
      error => console.log('not logged in')
    )

  }

  ngOnInit() {
  }

  // login(username: String, password: String): void {
  //   console.log('username: ' + username);
  //   console.log('password: ' + password);
  // }

  login() {
    const inputValue = this.form.value;
    
    this._authService.login(inputValue.username, inputValue.password)
      .subscribe(
        success => this.router.navigate(['/register']),
        error => alert(error)
      );
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle();
  }

}
