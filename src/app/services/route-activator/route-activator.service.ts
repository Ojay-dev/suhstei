import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { BookService } from '../book-service/book.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteActivator implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  constructor(private bookService: BookService) { }

  // canActivate() {
    // this.bookService.getBooks(route.params['id'])
  // }
}
