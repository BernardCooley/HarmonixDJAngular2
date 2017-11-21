import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(private _angularFireAuth: AngularFireAuth) {
    this.user = _angularFireAuth.authState;
  }

  login(username, password): Observable<any> {
    return Observable.fromPromise(
      this._angularFireAuth.auth.signInWithEmailAndPassword(username, password)
    );
  }

  register(email, password): Observable<any> {
    // console.log(email, password);
    return Observable.fromPromise(
      this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  registerUserDetails(firstName, lastName, djName, username) {
    
  }

  loginWithGoogle() {
    this._angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }

}
