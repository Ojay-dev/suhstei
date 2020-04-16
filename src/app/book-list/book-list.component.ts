import { Component, OnInit } from '@angular/core';
import { BookService } from '../services';
import { IBook } from '../shared/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IPaginage } from '../shared/paginateConfig';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  newBooks: IBook[] = [];
  allBooks: IBook[] = [];
  config: IPaginage;
  year = new Date().getFullYear();

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
    // function to split into four arr

    // New Books
    const newBookArr = this.route.snapshot.data.books['books'];

    for (let i = 0; i < newBookArr.length; i++) {
      if (this.newBooks.length === 4) {
        break;
      }
      this.newBooks.push(newBookArr[newBookArr.length - (i + 1)]);
    }
    this.newBooks = this.chunkArrayInGroups(this.newBooks, 4);


    // All Books
    const allBookArr = this.route.snapshot.data.books['books'];

    for (let i = 0; i < allBookArr.length; i++) {
      this.allBooks.push(allBookArr[allBookArr.length - (i + 1)]);
    }
    this.allBooks = this.chunkArrayInGroups(this.allBooks, 4);

  }

  chunkArrayInGroups(arr, size) {
    const newArr = new Array();

    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  pageChange(newPage: number) {
    this.router.navigate(['book'], { queryParams: { page: newPage } });
  }

}
