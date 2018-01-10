import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  public userId: string;

  constructor(private _angularFireAuth: AngularFireAuth) {
    this.user = _angularFireAuth.authState;
  }

  logout() {
    return Observable.fromPromise(
      this._angularFireAuth.auth.signOut());
  }

  login(email, password): Observable<any> {
    return Observable.fromPromise(
      this._angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  register(email, password): Observable<any> {
    return Observable.fromPromise(
      this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  loginWithGoogle() {
    this._angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }

  getUID() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        // console.log(this.userId, 'before');
        return this.userId;
      }
    });
  }

  getUserId(): Observable<any> {
    return this.user;
  }

  getCurrentUser() {
    return this.user;
  }

}
