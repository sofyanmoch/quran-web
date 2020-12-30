import { Injectable } from '@angular/core';
import { Surah } from '../interface/surah';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuranService {

  // api
  API = process.env.API_URL;

  // httpHeaders
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // service
  // tslint:disable-next-line:typedef
  findAll() {
    return this.httpClient.get(`${this.API}`);
  }
  findById(idSurah: any): Observable<any> {
    const API_URL = `${this.API}/${idSurah}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
      return res || { };
    }),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line:typedef
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
