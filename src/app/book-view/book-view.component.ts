import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services';
import { AuthService } from '../user/auth/services';
import { IBook } from '../shared/book.model';
import { Subscription, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RequestService } from '../services/request-service/request.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})

export class BookViewComponent implements OnInit {
  book: any;
  uploader: any;
  subscription: Subscription;

  selfUploaded: boolean;

  constructor(
    private bookService: BookService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    // this.bookService.getBook('5e317a605ae13d1aa88fbb80').subscribe(data => {
    this.uploader = this.route.snapshot.data['uploader'];
    // console.log(this.route.snapshot.data['user']);

    this.book = this.route.snapshot.data['book'];
    console.log(this.book);

    if (this.auth.isLoggedIn) {
      if (!!this.uploader.avatar && this.uploader.avatar !== '') {
        const uploaderAvatarImg: HTMLImageElement = document.querySelector('#uploader-avatar');
        uploaderAvatarImg.src = this.uploader.avatar;
      }
    }

    this.selfUploaded = this.auth.getUserDetails()._id === this.book.uploader_id ? true : false;
  }


  request() {

    if (this.selfUploaded) {
      this.router.navigate([`user/books/book-review/${this.book._id}`]);
    } else {
      let requestData;

      requestData = {
        requester: this.route.snapshot.data['loggedInUser'],
        book: this.book
      };

      console.log(requestData);

      this.requestService.saveRequest(requestData).subscribe((data) => {
        // this.router.navigate(['book']);
      }, (err) => {
        console.error(err);
      });
    }

  }

}
