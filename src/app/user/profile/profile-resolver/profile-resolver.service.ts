import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../auth/services/authentication/auth.service';


@Injectable({
  providedIn: 'root'
})

export class ProfileResolver implements Resolve<any> {
  constructor(private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.authService.profile();
  }
}

