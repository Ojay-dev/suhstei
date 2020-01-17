import { Injectable } from '@angular/core';
import { IUser } from '../../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  avatar?: File;
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  // baseURL = 'http://localhost:8808/api';
  baseURL = 'http://suhstei.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      // console.log(JSON.parse(payload));

      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get'|'put', type: 'login'|'register'|'profile'|'update', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`${this.baseURL}/${type}`, user);
    } else if (method === 'put') {
      base = this.http.put(`${this.baseURL}/${type}`, user, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    } else {
      base = this.http.get(`${this.baseURL}/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
      //  .pipe(tap(data => {
      //       this.currentUser = data;
      //     }))
      //     .pipe(catchError(err => {
      //       return of(false);
      //     }));
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  updateCurrentUser(user: TokenPayload): Observable<any> {
    return this.request('put', 'update', user);
  }
  // Former code
  // loginUser(userName: string, password: string) {

  //   const loginInfo = {username: userName, password};
  //   const options = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  //   return this.http.post(`${this.baseURL}/login`, loginInfo, options)
  //     .pipe(tap(data => {
  //       this.currentUser = <IUser>data['user'];
  //     }))
  //     .pipe(catchError(err => {
  //       return of(false);
  //     }));

  //   // this.currentUser = {
  //   //   // id: Math.random(),
  //   //   avatar: '',
  //   //   firstName: 'Shenske',
  //   //   lastName: 'Nakamura',
  //   //   email: 'shenske.nakam@gmail.com',
  //   //   phoneNo: '08034567890'
  //   // };
  // }

}
