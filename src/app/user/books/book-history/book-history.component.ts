import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/services';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.css']
})
export class BookHistoryComponent implements OnInit {

  historyData: any[];

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {

    const requestDetails = this.route.snapshot.data['request']

    this.historyData =  requestDetails.filter(d => {
      if ( d.approved === true || d.disapproved === true || d.returned === true ) {
        return d;
      }
    });


    console.log(this.historyData);

  }

}
