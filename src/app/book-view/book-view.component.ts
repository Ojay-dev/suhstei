import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services';
import { AuthService } from '../user/auth/services';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
 book: any;
  constructor(private bookService: BookService, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.bookService.getBook('5e317a605ae13d1aa88fbb80').subscribe(data => {
      this.bookService.getBook(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data.book);

      this.book = data.book;
    });
  }

}
