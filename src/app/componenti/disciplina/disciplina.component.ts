import { Component, OnInit } from '@angular/core';

import { DisiplinaService } from './../../_services/disciplina/disiplina.service';
import { AtletiService } from './../../_services/atleti/atleti.service';

import { Disciplina } from 'src/app/models/disciplina/disciplina.model';
import { Atleta } from 'src/app/models/atleta/atleta.model';

import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';


import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProviderAst } from '@angular/compiler';



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
      || pipe.transform(country.area).includes(term)
      || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
  providers: [DecimalPipe]
})
export class DisciplinaComponent implements OnInit {


  Discipline?: Disciplina[];
  Atleti?: Atleta[];

  listaEventi?: Disciplina[];

  nomeDisciplina = '';
  nomePunti = '';
  totPunti = '4';

  punti = [
    {id: 1, punteggio: "1"},
    {id: 2, punteggio: "2"},
    {id: 3, punteggio: "3"},
    {id: 4, punteggio: "4"},
    {id: 5, punteggio: "5"}
  ];

  contactFormDiscipline: FormGroup;

  contactFormPunti: FormGroup;

  countries$: Observable<Country[]>;


  filter = new FormControl('')


  msg: string;


  constructor(private disciplinaService: DisiplinaService,
    private atletiService: AtletiService,
    private fb: FormBuilder,
    pipe: DecimalPipe,
  ) {

    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  clickEvent() {
    this.msg = 'Button is Clicked';
    console.log(this.msg);

    return this.msg;
  }

  // ngOnInit(): void {

  ngOnInit() {



    // this.prova();

    this.disciplinaService.getDisciplina().subscribe(

      data => {
        this.Discipline = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log(data);
      },
      err => {
        this.Discipline = JSON.parse(err.error).message;
      }
    );


    // https://www.freakyjolly.com/angular-how-to-get-dropdown-selected-text-using-common-service-method/#:~:text=Add%20Simple%20Select%20%2F%20Dropdown,value%20in%20mySelect%20using%20binding.

    // https://www.tektutorialshub.com/angular/select-options-example-in-angular/
    // TO DO


    ////
    this.contactFormDiscipline = this.fb.group({
      disciplina: [null]
    });

    this.contactFormDiscipline.get("disciplina").valueChanges
      .subscribe(value => {
        console.log("value get disciplina: ", value);

        this.nomeDisciplina = value;

        this.onDisciplinaChanged(value);
      })


      this.contactFormPunti = this.fb.group({
        punti: [null]
      });
  
      this.contactFormPunti.get("punti").valueChanges
        .subscribe(value => {
          console.log("value get punti: ", value);
  
          this.totPunti = value;
  
          this.onDisciplinaPunti(value);
        })



  }


  onDisciplinaPunti(value) {
    console.log('onDisciplinaPunti')
    console.log("value punti chiamata api: ", value)
    this.atletiService.getAtletafilterbypunteggio(value).subscribe(

      data => {
        this.Atleti = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log(data);
      },
      err => {
        this.Atleti = JSON.parse(err.error).message;
      }
    )
  }



  clickFunction() {

    alert("clicked me!");

  }

  submitDue() {
    console.log("Form Submitted")
    console.log(this.contactFormDiscipline.value)
  }

  onDisciplinaChanged(value) {
    console.log('onCountryChanged')
    console.log("value disciplina: ", value)

    // http://localhost:3000/api/lista/gare/eventi/filterbydisciplina?nomeDisciplina=Ginnastica Artistica Maschile

    this.disciplinaService.getListaEventiByDisciplina(this.nomeDisciplina).subscribe(

      data => {
        this.listaEventi = data;
        // console.log("content", this.content);
        // this.Players = Array.of(this.Players);

        // console.log(this.Players);
        console.log("RETRUN LISTA EVENTI FILTRATI: ", this.listaEventi);
      },
      err => {
        this.listaEventi = JSON.parse(err.error).message;
      }
    );
  }

}
