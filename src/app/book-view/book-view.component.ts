import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services';
import { AuthService } from '../user/auth/services';
import { IBook } from '../shared/book.model';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})

export class BookViewComponent implements OnInit {
  book: any;
  uploader: any;
  constructor(private bookService: BookService, public auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.bookService.getBook('5e317a605ae13d1aa88fbb80').subscribe(data => {
    this.uploader = this.route.snapshot.data['user'];
    console.log(this.route.snapshot.data['user']);

    this.book = this.route.snapshot.data['book'];
    console.log(this.book);

    if (this.auth.isLoggedIn) {
      if (!!this.uploader.avatar && this.uploader.avatar !== '') {
        const uploaderAvatarImg: HTMLImageElement = document.querySelector('#uploader-avatar');
        uploaderAvatarImg.src = this.uploader.avatar;
      }
    }
  }

}
