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

  requestData: any;

  constructor(
    private bookService: BookService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    // this.bookService.getBook('5e317a605ae13d1aa88fbb80').subscribe(data => {
    this.uploader = this.route.snapshot.data['user'];
    // console.log(this.route.snapshot.data['user']);

    this.book = this.route.snapshot.data['book'];
    console.log(this.book);

    if (this.auth.isLoggedIn) {
      if (!!this.uploader.avatar && this.uploader.avatar !== '') {
        const uploaderAvatarImg: HTMLImageElement = document.querySelector('#uploader-avatar');
        uploaderAvatarImg.src = this.uploader.avatar;
      }
    }

  }


  request() {

    this.requestService.getRequests().subscribe(data => console.log(data));

      // this.requestData = {
      //   requester: {
      //     id: this.auth.getUserDetails()._id,
      //     email: this.auth.getUserDetails().email,
      //     name: this.auth.getUserDetails().name
      //   },
      //   book: this.book
      // };

      // console.log(this.requestData);

      // this.requestService.saveRequest(this.requestData).subscribe((data) => {
      //   // this.router.navigate(['book']);
      // }, (err) => {
      //   console.error(err);
      // });
  }

}
