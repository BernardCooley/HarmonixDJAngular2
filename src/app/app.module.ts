//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocusModule } from 'angular2-focus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideMenuModule } from './custom_node_modules/cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { MatListModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//pages & containers
import { AppContainerComponent } from './app-container/app-container.component';
import { AppComponent } from './app.component';
import { PlaySetComponent } from './pages/play-set/play-set.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrackManagementComponent } from './pages/track-management/track-management.component';
import { SetManagementComponent } from './pages/set-management/set-management.component';
import { HomeComponent } from './pages/home/home.component';

//components
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllTracksListComponent } from './components/all-tracks-list/all-tracks-list.component';

//services
import { AuthService } from './services/auth/auth.service';
import { ListService } from './services/list/list.service';
import { TracksService } from './services/tracks/tracks.service';
import { TracklistService } from './services/tracklist/tracklist.service';
import { UserDataService } from './services/user-data/user-data.service';

//environment
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'help', component: HelpComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'playSet', component: PlaySetComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'trackManagement', component: TrackManagementComponent},
  {path: 'setManagement', component: SetManagementComponent},
  {path: 'allTracksList', component: AllTracksListComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    PlaySetComponent,
    RegisterComponent,
    TrackManagementComponent,
    SetManagementComponent,
    AllTracksListComponent,
    HomeComponent,
    AppContainerComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FocusModule.forRoot(),
    SlideMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthService, ListService, TracksService, TracklistService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
