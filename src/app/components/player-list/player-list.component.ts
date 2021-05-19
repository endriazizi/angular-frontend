import { Component, OnInit } from '@angular/core';

import { PlayerService } from './../../_services/player.service.service';

import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  
  Players?: Player[];

  

  
  

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    
    this.playerService.getPlayers().subscribe(
      
      data => {
        this.Players = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log(data);
      },
      err => {
        this.Players = JSON.parse(err.error).message;
      }
    );
  }
}
