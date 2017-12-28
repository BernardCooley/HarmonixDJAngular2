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

  public signInForm: FormGroup;
  public $user = this._authService.user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router) {
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
          console.log(this._authService.getUID())
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
