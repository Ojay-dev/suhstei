import { Injectable } from '@angular/core';
import { BookService } from '../book-service/book.service';
import { Resolve } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/user/auth/services';
import { RequestService } from '../request-service/request.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationResolverService implements Resolve<any> {

  constructor(private requestService: RequestService) { }

  resolve() {
    return this.requestService.getRequests();
  }
}
