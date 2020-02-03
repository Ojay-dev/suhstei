import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;

  constructor(private auth: AuthService, private route: ActivatedRoute) { }

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

    console.log(this.books);


  }

}
