import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  requestData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.requestData = this.route.snapshot.data['request'];
    console.log(this.requestData);
  }

}
