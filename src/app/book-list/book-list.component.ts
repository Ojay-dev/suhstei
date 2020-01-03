import { Component, OnInit } from '@angular/core';
import { BookService } from '../services';
import { IBook } from '../shared/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.bookService.getBooks().subscribe(books => this.books = books);
    this.books = this.route.snapshot.data.books['books'];
    console.log(this.books);
  }

}
