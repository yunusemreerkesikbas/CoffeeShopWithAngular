import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Client } from '../client/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/clients"

  getClients():Observable<Client[]>{
    return this.http
    .get<Client[]>(this.path).pipe(tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message
    }
    else{
      errorMessage ="Sistemsel hata"
    }
    return throwError(errorMessage);
  }

}
