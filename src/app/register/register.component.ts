import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { TracksService } from '../services/tracks/tracks.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public user$ = this._authService.user;
  public isLoggedIn;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private router: Router, private _tracksService: TracksService) {
    this.registerForm = this._formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      djName: ['', Validators.required],
      password: ['', Validators.required],
      consent: ['', Validators.required]
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
      success => {
        // trying to return id before it has retrieved it
        // use promise to wait until the account is created and then grab uid
        
        this._tracksService.addNewUserProfile(this._authService.getUID(), inputValue.consent, inputValue.djName)
      },
      error => alert(error)
    );
  }

}
