import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public user$ = this._authService.user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router) {
    this.registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      djName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public submitForm(form: any): void {
    console.log(form);
  }

  register() {
    const inputValue = this.registerForm.value;

    this._authService.register(inputValue.emailAddress, inputValue.password)
    .subscribe(
      success => console.log(success.uid),
      error => alert(error)
    );
  }

}
