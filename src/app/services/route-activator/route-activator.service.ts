import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { BookService } from '../book/book.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivator implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }

  constructor(private bookService: BookService) { }

  // canActivate() {
    // this.bookService.getBooks(route.params['id'])
  // }
}
