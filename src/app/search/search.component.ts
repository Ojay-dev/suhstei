import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from '../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  state$: Observable<object>;
  searchResult;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.state$ = this.activatedRoute.paramMap
    //   .pipe(map(() => window.history.state));
    if (this.bookService.getSearchBooks() === undefined || this.bookService.getSearchBooks().length === 0) {
      this.searchResult =  'No result found';
    } else {
      this.searchResult = this.bookService.getSearchBooks();
    }


    console.log(this.searchResult);
    this.bookService.searchResults = [];

  }

}
