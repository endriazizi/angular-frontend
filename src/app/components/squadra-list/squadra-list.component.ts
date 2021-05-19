import { Component, OnInit } from '@angular/core';

import { SquadraService } from './../../_services/squadra.service.service';

import { Squadra } from 'src/app/models/squadra/squadra.model';

@Component({
  selector: 'app-squadra-list',
  templateUrl: './squadra-list.component.html',
  styleUrls: ['./squadra-list.component.css']
})
export class SquadraListComponent implements OnInit {

  
  Squadre?: Squadra[];

  

  
  

  constructor(private squadraServizio: SquadraService) { }

  ngOnInit(): void {
    
    this.squadraServizio.getSquadra().subscribe(
      
      data => {
        this.Squadre = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log(data);
      },
      err => {
        this.Squadre = JSON.parse(err.error).message;
      }
    );
  }
}

