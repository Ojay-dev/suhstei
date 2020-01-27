import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth/services';
import { BookService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundBooks: any;
  firstname = 'User';

  constructor(public auth: AuthService, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.auth.profile().subscribe(profile => {
      console.log(profile.firstname);

      this.firstname = profile.firstname;
    })
  }

  searchBooks(searchTerm) {


    this.bookService.searchBooks(searchTerm);
    this.router.navigateByUrl('search-result');

      // .subscribe(books => {
      //   this.foundBooks = books;
      //   console.log(this.foundBooks);
      //   this.router.navigateByUrl('search-result', { state: { result: this.foundBooks } });
      // });
  }

  showMenu() {
    const item: HTMLElement = document.querySelector('.dropdown-content');
    item.style.display = 'block';
  }

  hideMenu() {
    const item: HTMLElement = document.querySelector('.dropdown-content');
    item.style.display = 'none';
  }

}
