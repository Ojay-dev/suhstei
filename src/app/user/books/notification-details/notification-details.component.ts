import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  requestData: any;

  constructor(private route: ActivatedRoute, private requestService: RequestService, private router: Router) { }

  ngOnInit() {
    this.requestData = this.route.snapshot.data['request'];
    console.log(this.requestData);
  }

  accept() {
    // console.log("Accept!!!");

    this.requestService.updateRequest(this.requestData)
      .subscribe(() => {
        console.log('Successfull!!!');
        this.router.navigate(['/user/notification']);
      }, (err) => {
        console.error(err);
      });
  }

}
