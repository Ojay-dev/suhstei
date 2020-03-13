import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/user/auth/services';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends AuthService {

  baseURL = 'http://localhost:8808/api';
  // baseURL = 'http://suhstei.herokuapp.com/api';

  constructor(private httpClient: HttpClient, router: Router) {
    super(httpClient, router);
  }

  saveRequest(requestData): Observable<any> {
    // console.log(requestData);

    return this.httpClient.post<any>(`${this.baseURL}/new-request`, requestData, {
      headers: { Authorization: `Bearer ${this.getToken()}` },
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(this.handleError<any>('saveRequest')));
  }

  updateRequest(updateData): Observable<any> {
    // console.log(requestData);

    return this.httpClient.put(`${this.baseURL}/update-request`, updateData, {
      headers: { Authorization: `Bearer ${this.getToken()}` },
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(this.handleError<any>('saveRequest')));
  }

  getRequests(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/requests`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    })
      .pipe(catchError(this.handleError<any[]>('getRequests', [])));
  }

  getRequest(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/requests/${id}`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    })
      .pipe(catchError(this.handleError<any>('getRequest', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
