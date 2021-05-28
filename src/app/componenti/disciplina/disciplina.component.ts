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
  totPunti = '4';

  contactFormDiscipline: FormGroup;

  countries$: Observable<Country[]>;

  
  filter = new FormControl('')

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

  ngOnInit(): void {

    this.atletiService.getAtletafilterbypunteggio(this.totPunti).subscribe(

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
    );


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
        console.log("value: ", value);

        this.nomeDisciplina = value;

        this.onDisciplinaChanged(value);
      })



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
    console.log(value)

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
