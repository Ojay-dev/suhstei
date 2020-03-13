import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;
  config: any;
  booksUploaded: boolean;


  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1
    );
   }

  ngOnInit() {

    const id = this.auth.getUserDetails()._id;
    const bookDataUnfiltered = this.route.snapshot.data.books['books'];
    const bookDataFilteredByUser = new Array();


    for (let dt of bookDataUnfiltered) {
      if (dt.uploader_id === id ) {
        bookDataFilteredByUser.push(dt);
      }
    }

    console.log(bookDataFilteredByUser);

    const chunkArrayInGroups = (arr, size) => {
      const newArr = new Array();

      for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }
      return newArr;
    };

    this.books = chunkArrayInGroups(bookDataFilteredByUser, 4);

    this.booksUploaded = this.books.length !== 0 ? true : false;

    console.log(this.books, this.booksUploaded);

  }

  pageChange(newPage: number) {
    this.router.navigate(['user/books'], { queryParams: { page: newPage } });
  }

}
