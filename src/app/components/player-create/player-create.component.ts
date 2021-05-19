
import { Component, NgZone, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PlayerService } from './../../_services/player.service.service';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

    submitted = false;
  playerForm: FormGroup;
  // EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  PlayerRole:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  

   constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private playerService: PlayerService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.playerForm = this.fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // designation: ['', [Validators.required]],
      // phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.playerForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.playerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.playerForm.valid) {
      return false;
    } else {
      this.playerService.createPlayer(this.playerForm.value).subscribe(
        (res) => {
          console.log('Player successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/player-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}

// import { Component, NgZone, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PlayerService } from './../../_services/player.service.service';

// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-player-create',
//   templateUrl: './player-create.component.html',
//   styleUrls: ['./player-create.component.css']
// })

// export class PlayerCreateComponent implements OnInit {  
//   submitted = false;
//   playerForm: FormGroup;
//   // EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
//   PlayerRole:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
//   constructor(
//     public fb: FormBuilder,
//     private router: Router,
//     private ngZone: NgZone,
//     private playerService: PlayerService
//   ) { 
//     this.mainForm();
//   }

//   ngOnInit() { }

//   mainForm() {
//     this.playerForm = this.fb.group({
//       name: ['', [Validators.required]],
//       // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
//       // designation: ['', [Validators.required]],
//       // phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
//     })
//   }

//   // Choose designation with select dropdown
//   updateProfile(e){
//     this.playerForm.get('designation').setValue(e, {
//       onlySelf: true
//     })
//   }

//   // Getter to access form control
//   get myForm(){
//     return this.playerForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;
//     if (!this.playerForm.valid) {
//       return false;
//     } else {
//       this.playerService.createPlayer(this.playerForm.value).subscribe(
//         (res) => {
//           console.log('Player successfully created!')
//           this.ngZone.run(() => this.router.navigateByUrl('/player-list'))
//         }, (error) => {
//           console.log(error);
//         });
//     }
//   }

// }
