import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class TracksService {

  public database = firebase.database();
  private userProfileKey;
  private updates = {};
  private userData = {};
  private basicUserData = {};
  private data = {};
  private starCountRef;

  constructor(private _http: Http) {
    
  }

  getUserDjName(uid) {
    var djName = '';
    this.starCountRef = this.database.ref('userProfiles/' + uid);

    this.starCountRef.once("value").then(function(snapshot) {
      djName = snapshot.val().dj_name;
    });

    return djName;


    // return this.starCountRef.on("value").then(function(snapshot) {
    //     return snapshot.val();
    // }, function (errorObject) {
    //     console.log("Failed: " + errorObject.code);
    // });



    // this.starCountRef.on('value', function(snapshot) {
      
    //   console.log(snapshot.val());
    // });
  }

  getAllTracks(): Observable<any> {
    return this._http.get('https://firsttestproject-9dc14.firebaseio.com/tracks.json')
      .map(res => res.json());
  }

  addNewUserProfile(uid, consent, dj_name) {
    console.log(uid);
    this.data = {
      uid: uid,
      consent: consent,
      dj_name: dj_name
    };

    this.update('userProfiles', this.data);
  }

  addNewTrack() {
    this.data = {
      consent: '',
      dj_name: '',
      email: '',
      tracklists: [{
        date: '1',
        genre: '1',
        id: '1',
        location: '1',
        venue: '1'
      }],
      tracks: [{
        id: '1',
        tracklistId: '1'
      }]
    };

    this.update('userProfiles', this.data);
  }

  update(collection, data) {
    this.userProfileKey = this.database.ref().child(collection).push().key;

    this.updates['/' + collection + '/' + this.userProfileKey] = this.data;

    return firebase.database().ref().update(this.updates);
  }

  writeUserData(artist, title) {
    // console.log('writeUserData clicked');
    // console.log(artist, title);
    firebase.database().ref('tracks/').set(
      {
        artist: artist,
        title: title
      }
    );
  }
  

}
