import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BookService } from '..';
import { AuthService } from 'src/app/user/auth/services';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<any> {
  constructor(private bookService: BookService, private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];

    // After the BookService fetches its corresponding data, you can pass
    // its response to the next call which is the authService and pass the
    // uploaderId from the response data itself
    return this.bookService
      .getBook(id)
      .pipe(switchMap(data => this.authService.getUser(data.uploader_id)));
  }
}

