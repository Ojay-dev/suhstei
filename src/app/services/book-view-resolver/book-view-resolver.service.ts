import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BookService } from '..';

@Injectable({
  providedIn: 'root'
})

export class BookViewResolver implements Resolve<any> {
  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.bookService.getBook(route.params['id']);
  }
}

