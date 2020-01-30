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

    const chunkArrayInGroups = (arr, size) => {
      const newArr = new Array();

      for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }
      return newArr;
    };

    this.books = chunkArrayInGroups(this.route.snapshot.data.books['books'], 4);
    console.log(this.books);

  }

}
