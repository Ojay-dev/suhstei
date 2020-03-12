import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BookService } from '..';
import { AuthService } from 'src/app/user/auth/services';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CurrentUserResolver implements Resolve<any> {
  constructor(private authService: AuthService) { }

  resolve() {
    return this.authService.getUser(this.authService.getUserDetails()._id);
  }
}

