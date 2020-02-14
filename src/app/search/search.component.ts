import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchTerm =  this.route.snapshot.queryParams['search'];
    const term = this.searchTerm.toLocaleLowerCase();
    const result: any[] = [];

    const BOOKS = this.route.snapshot.data.books.books;

    // console.log(BOOKS);


    BOOKS.forEach(books => {
      console.log(Object.values(books));

      // let matchingBooks = books.filter(book => book.toLocaleLowerCase().indexOf(term) > -1);
      // console.log(matchingBooks);

    });

    console.log(this.searchTerm);

    // console.log(this.route.snapshot.data.books.books);

  }

}
