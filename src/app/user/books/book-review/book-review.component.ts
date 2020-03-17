import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {

  book: any;
  editView = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.book = this.route.snapshot.data['book'];
    console.log(this.book);
  }

  editBook() {
    this.editView = true;
  }

  disableEdit() {
    this.editView = false;
  }

}
