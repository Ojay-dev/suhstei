import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/services';
import { stringify } from 'querystring';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.css']
})
export class BookHistoryComponent implements OnInit {

  historyData: any[];
  status: string;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    const requestDetails = this.route.snapshot.data['request']

    this.historyData =  requestDetails.filter(d => {
      if ( d.approved === true || d.disapproved === true || d.returned === true ) {
        if (d.approved && !d.returned) {
          d.status = 'Borrowed';
        } else if (d.disapproved) {
          d.status = 'Declined';
        } else if (d.approved && d.returned) {
          d.status = 'Returned';
        } else {
          d.status = '';
        }

        return d;
      }
    });


    console.log(this.historyData);

  }

}
