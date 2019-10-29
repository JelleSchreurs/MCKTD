import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint = 'http://localhost:4200/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add User
  AddUser(data: User): Observable<any> {
    const API_URL = `${this.endpoint}/add-User`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all Users
  GetUsers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get User
  GetUser(id): Observable<any> {
    const API_URL = `${this.endpoint}/read-User/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update User
  UpdateUser(id, data: User): Observable<any> {
    const API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete User
  DeleteUser(id): Observable<any> {
    // tslint:disable-next-line: prefer-const
    let API_URL = `${this.endpoint}/delete-User/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    );
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
