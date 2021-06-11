import { Component, OnInit } from '@angular/core';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigazione',
  templateUrl: './navigazione.component.html',
  styleUrls: ['./navigazione.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class NavigazioneComponent implements OnInit {



  images = [

    // "assets/img/clients/fem.png",
    // "assets/img/clients/ginnastica artm.png",
    // "assets/img/clients/ae.png",
    {id: 1, img: "assets/img/clients/ttt.png", name:'Superman'},
    {id: 2, img: "assets/img/clients/rit.png", name:'Batman'},
    // {id: 5, name:'BatGirl'},
    // {id: 3, name:'Robin'},
    // {id: 4, name:'Flash'}
  ];

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
