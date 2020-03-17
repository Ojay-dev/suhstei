import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../user/auth/services';
import { BookService } from '../services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  searchTerm = '';
  foundBooks: any;
  firstname = 'User';
  avatar: string;

  subscription: Subscription;

  constructor(public auth: AuthService, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
   this.subscription = this.auth.profile().subscribe(profile => {
      this.firstname = profile.firstname;
      if (profile.avatar) {
        this.avatar = profile.avatar;
      }

      console.log(this.avatar);
      
    });
  }

  searchBooks(searchTerm) {
    this.router.navigate(['search-result'], { queryParams: { search: searchTerm } });
  }

  showMenu() {
    const item: HTMLElement = document.querySelector('.dropdown-content');
    item.style.display = 'block';
  }

  hideMenu() {
    const item: HTMLElement = document.querySelector('.dropdown-content');
    item.style.display = 'none';
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.subscription.unsubscribe;
  }

}
