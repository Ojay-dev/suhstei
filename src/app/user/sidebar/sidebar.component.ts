import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request-service/request.service';
import { AuthService } from '../auth/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  badgeAlert: number;

  constructor(private requestService: RequestService, private authService: AuthService) { }

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(request => {
      // console.log(request);

      this.badgeAlert = request.filter(d => {
        if (
          d.book_requested.uploader_id === this.authService.getUserDetails()._id &&
          d.requester._id !== this.authService.getUserDetails()._id &&
          d.approved === false && d.approved === false && d.request_viewed === false
        ) {
          return d;
        }
      }).length;

      console.log(this.badgeAlert);
    });
  }

}
