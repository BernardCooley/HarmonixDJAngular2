import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlaySetComponent } from './play-set/play-set.component';
import { RegisterComponent } from './register/register.component';
import { TrackManagementComponent } from './track-management/track-management.component';
import { SetManagementComponent } from './set-management/set-management.component';
import { FocusModule } from 'angular2-focus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideMenuModule } from './custom_node_modules/cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { MatListModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import { ListService } from './services/list/list.service';
import { TracksService } from './services/tracks/tracks.service';
import { TracklistService } from './services/tracklist/tracklist.service';
import { HttpModule } from '@angular/http';
import { AllTracks } from './data/trackData';
import { AllTracksListComponent } from './all-tracks-list/all-tracks-list.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'help', component: HelpComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'playSet', component: PlaySetComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'trackManagement', component: TrackManagementComponent},
  {path: 'setManagement', component: SetManagementComponent},
  {path: 'allTracksList', component: AllTracksListComponent}
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
    ListComponent,
    AllTracksListComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FocusModule.forRoot(),
    SlideMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    HttpModule
  ],
  providers: [ListService, TracksService, TracklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
