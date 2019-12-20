import { Component, OnInit } from '@angular/core';
import { BookService } from '../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit() {
  }

}
