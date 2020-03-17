import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services';
import { IPaginage } from '../shared/paginateConfig';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  searchResult = [];
  config: IPaginage;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1
    );
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParams['search'];
    const term = this.searchTerm.toLocaleLowerCase();

    const BOOKS = this.route.snapshot.data.books.books;

    // console.log(BOOKS);


    let searchResult = BOOKS.filter(d => {
      console.log(d);

      if (
        d.title.toLocaleLowerCase().indexOf(term) > -1 ||
        d.author.toLocaleLowerCase().indexOf(term) > -1 ||
        d.description.toLocaleLowerCase().indexOf(term) > -1
      ) {
        return d;
      }
    });


    const chunkArrayInGroups = (arr, size) => {
      const newArr = new Array();

      for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }
      return newArr;
    };


    // let allBookArr = this.route.snapshot.data.books['books'];

    for (let i = 0; i < searchResult.length; i++) {
      this.searchResult.push(searchResult[searchResult.length - (i + 1)]);
    }
    this.searchResult = chunkArrayInGroups(this.searchResult, 4);

    // console.log(this.searchResult);
    // tslint:disable-next-line: no-trailing-whitespace


  }

  pageChange(newPage: number) {
    this.router.navigate(['search-result'], { queryParams: { page: newPage } });
  }

}
