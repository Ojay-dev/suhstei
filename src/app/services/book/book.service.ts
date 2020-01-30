import { Injectable, EventEmitter } from '@angular/core';
import { IBook } from 'src/app/shared/book.model';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/user/auth/services';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AuthService {
  searchResults: any = [];
  baseURL = 'http://localhost:8808/api';
  // baseURL = 'http://suhstei.herokuapp.com/api';

  constructor(private httpClient: HttpClient, router: Router) {
    super(httpClient, router);
  }

  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.baseURL)
      .pipe(catchError(this.handleError<IBook[]>('getBooks', [])));
    // return BOOKS;
  }

  getBook(id: string): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.baseURL}/${id}`)
      .pipe(catchError(this.handleError<IBook[]>('getBooks', [])));
    // return BOOKS;
  }

  saveBook(title: string, author: string, review: string, avatar: File): Observable<HttpEvent<IBook>> {
    const formData: any = new FormData();
    formData.append('title', title);
    formData.append('avatar', avatar);
    formData.append('author', author);
    formData.append('review', review);

    return this.httpClient.post<IBook>(`${this.baseURL}/create-new-book`, formData, {
      headers: { Authorization: `Bearer ${this.getToken()}` },
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(this.handleError<HttpEvent<IBook>>('saveBook')));
  }

  searchBooks(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();

    // BOOKS.forEach(book => {
      // let matchingBooks = [];
      // if (book.title.toLocaleLowerCase().indexOf(term) > -1) {
        // this.searchResults.push(book);
      // }
      // results.concat(matchingBooks);
      // console.log(results);
    // });

    // const emitter = new EventEmitter(true);
    // setTimeout(() => {
    //   emitter.emit(this.searchResults);
    // }, 100);

    // return emitter;

  }

  getSearchBooks(): IBook {
    return this.searchResults;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}



