import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { SquadraCreateComponent } from './components/squadra-create/squadra-create.component';
import { SquadraEditComponent } from './components/squadra-edit/squadra-edit.component';
import { SquadraListComponent } from './components/squadra-list/squadra-list.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { NavigazioneComponent } from './componenti/navigazione/navigazione.component';
import { TeamComponent } from './componenti/team/team.component';
import { DisciplinaComponent } from './componenti/disciplina/disciplina.component';
import { AboutComponent } from './componenti/about/about.component';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { OnepageComponent } from './componenti/onepage/onepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    PlayerCreateComponent,
    PlayerEditComponent,
    PlayerListComponent,
    SquadraCreateComponent,
    SquadraEditComponent,
    SquadraListComponent,
    EventoListComponent,
    NavigazioneComponent,
    TeamComponent,
    DisciplinaComponent,
    AboutComponent,
    HomepageComponent,
    OnepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
