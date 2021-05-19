import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';


import { TokenStorageService } from '../token-storage.service';

import { Disciplina } from '../../models/disciplina/disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisiplinaService {

  baseUri: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }


  //   getAdminBoard(): Observable<Kit[]> {
  //   const token = this.tokenStorageService.getToken();
  //   const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${token}` })
  //   }
  //   return this.http.get<Kit[]>(API_URL + 'kit', httpOptions);
  // }


  // Create
  createPlayer(data): Observable<any> {
    const token = this.tokenStorageService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    console.log("headers: ", httpOptions);
    console.log("data: ", data);

    let url = `${this.baseUri}/crea/giocatore`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  // getPlayers() {
  //   return this.http.get(`${this.baseUri}`);
  // }

  getDisciplina(): Observable<Disciplina[]> {
    const token = this.tokenStorageService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    let url = `${this.baseUri}/lista/disciplina`;
    return this.http.get<Disciplina[]>(url, httpOptions);
  }
// http://localhost:3000/api/lista/gare/eventi/filterbydisciplina?nomeDisciplina=Ginnastica Artistica Maschile
  getListaEventiByDisciplina(nomeDisciplina): Observable<Disciplina[]> {

    const token = this.tokenStorageService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    let url = `${this.baseUri}/lista/gare/eventi/filterbydisciplina?nomeDisciplina=${nomeDisciplina}`;
    return this.http.get<Disciplina[]>(url, httpOptions);
  }

  // Get employee
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteEmployee(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
