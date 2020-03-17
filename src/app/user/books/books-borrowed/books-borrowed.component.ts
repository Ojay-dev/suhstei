import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-borrowed',
  templateUrl: './books-borrowed.component.html',
  styleUrls: ['./books-borrowed.component.css']
})
export class BooksBorrowedComponent implements OnInit {

  tabbedMode = true;
  requestData: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.requestData = this.route.snapshot.data['request'];
    console.log(this.requestData);


  }

}
