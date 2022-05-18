import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  path = "http://localhost:3000/products"
  getProducts(categoryId: any):Observable<Product[]>{
    
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId="+ categoryId
    }

    return this.http
    .get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu"
    }
    else {
      errorMessage = "Sistemsel hata"
    }
    return throwError(errorMessage);
  }

}
