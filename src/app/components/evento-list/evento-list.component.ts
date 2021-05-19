import { Component, OnInit } from '@angular/core';

import { EventoService } from './../../_services/eventoservice.service';

import { Evento } from 'src/app/models/evento/evento.model';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  
  Eventi?: Evento[];

  

  
  

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    
    this.eventoService.getEvento().subscribe(
      
      data => {
        this.Eventi = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log(data);
      },
      err => {
        this.Eventi = JSON.parse(err.error).message;
      }
    );
  }
}
