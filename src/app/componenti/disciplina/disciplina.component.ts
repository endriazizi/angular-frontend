import { Component, OnInit } from '@angular/core';

import { DisiplinaService } from './../../_services/disciplina/disiplina.service';

import { Disciplina } from 'src/app/models/disciplina/disciplina.model';

import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {


  Discipline?: Disciplina[];

  listaEventi?: Disciplina[];

  nomeDisciplina = '';

  contactFormDiscipline: FormGroup;

  constructor(private disciplinaService: DisiplinaService, private fb: FormBuilder) { }

  ngOnInit(): void {

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
