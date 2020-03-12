import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/services';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  // content: any;
  requestData;

  private subscription: Subscription;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    const requestDetails = this.route.snapshot.data['request']

    this.requestData =  requestDetails.filter(d => {
      if ( d.requester._id === this.authService.getUserDetails()._id ) {
        return d;
      }
    });

    console.log( this.requestData );

  }


}