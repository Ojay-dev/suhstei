import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/services';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  // content: any;
  requestData;

  private subscription: Subscription;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {

    // this.subscription = this.reque

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
