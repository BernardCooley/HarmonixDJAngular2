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
import { PlaySetPageComponent } from './pages/play-set-page/play-set-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TrackManagementPageComponent } from './pages/track-management-page/track-management-page.component';
import { SetManagementPageComponent } from './pages/set-management-page/set-management-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

//components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllTracksListComponent } from './components/all-tracks-list/all-tracks-list.component';

//services
import { AuthService } from './services/auth/auth.service';
import { TracksService } from './services/tracks/tracks.service';
import { UserDataService } from './services/user-data/user-data.service';

//environment
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'help', component: HelpPageComponent},
  {path: 'playSet', component: PlaySetPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'trackManagement', component: TrackManagementPageComponent},
  {path: 'setManagement', component: SetManagementPageComponent},
  {path: 'home', component: HomePageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HelpPageComponent,
    HeaderComponent,
    FooterComponent,
    PlaySetPageComponent,
    RegisterPageComponent,
    TrackManagementPageComponent,
    SetManagementPageComponent,
    AllTracksListComponent,
    HomePageComponent,
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
  providers: [AuthService, TracksService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
