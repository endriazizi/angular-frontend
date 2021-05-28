import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { PlayerCreateComponent } from './components/player-create/player-create.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { SquadraListComponent } from './components/squadra-list/squadra-list.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { DisciplinaComponent } from './componenti/disciplina/disciplina.component';
import { AppComponent } from './app.component';
import { NavigazioneComponent } from './componenti/navigazione/navigazione.component';
import { HomeComponent } from './home/home.component';
import { OnepageComponent } from './componenti/onepage/onepage.component';

const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  // { path: '', component: NavigazioneComponent },


  { path: 'create-player', component: AppComponent },
  { path: 'edit-player/:id', component: PlayerEditComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'evento-list', component: EventoListComponent },


  { path: 'lista-giocatore', component: SquadraListComponent },

  { path: 'discipline', component: DisciplinaComponent }  ,



  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },

  { path: 'onepage', component: OnepageComponent },
  { path: '', redirectTo: 'onepage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
