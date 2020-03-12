import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { RequestService } from '../request-service/request.service';

@Injectable({
  providedIn: 'root'
})

export class RequestResolver implements Resolve<any> {
  constructor(private requestService: RequestService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.requestService.getRequest(route.params['id']);
  }
}

