import { Injectable } from '@angular/core';
import { BookService } from '../book-service/book.service';
import { Resolve } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/user/auth/services';

@Injectable({
  providedIn: 'root'
})
export class NotificationResolverService implements Resolve<any> {

  constructor(private bookService: BookService, private authService: AuthService) { }

  resolve() {
    let content;
    const requesterId = [];
    const requestData = [];

    return this.bookService.getBooks()
      .pipe(
        tap(data => console.log(data.books)),

        switchMap(data => {
          content = data.books
            .filter(book => {
              if (book.uploader_id === this.authService.getUserDetails()._id && book.request !== undefined) {
                return book;
              }
            });

          for (const value of content) {
            value.request.forEach(d => requesterId.push(d.requester_id));
          }

          // console.log(requesterId);

          return combineLatest(
            requesterId.map(data => this.authService.getUser(data))
          );
        })
      )
      // .subscribe(data => {
      //   for (const value of content) {
      //     requestData.push({
      //       bookId: value._id,
      //       bookTitle: value.title,
      //       request: data,
      //     });
      //   }

      //   console.log(requestData);

      // });

    // .pipe(
    //   tap(data => console.log(data.books)),
    //   switchMap(data =>
    //     combineLatest(
    //       ['5e21d286b3ee501ebc39d899', '5e2c5a20aff8434278639ff5']
    //       .map(result => this.authService.getUser(result))
    //     )
    //   )
    // )


    // .pipe(switchMap(data => combineLatest(
    //   data.books
    //   .filter(book => {
    //     if (book.request !== undefined) {
    //       return book.request;
    // }
    //   })
    //   .map(book => book
    //     .map(dt => this.authService.getUser(dt.request)))
    // )));
  }
}
