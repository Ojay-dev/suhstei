import { Routes } from '@angular/router';

import { ProfileComponent, ProfileEditComponent } from './profile';
import {
  BookListComponent,
  BookReviewComponent,
  BooksBorrowedComponent,
  AddBookComponent,
  BookHistoryComponent
} from './books';

import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent
} from './auth';
import { AuthGuardService } from './auth/services/auth-guard/auth-guard.service';
import { ProfileResolver } from './profile/profile-resolver/profile-resolver.service';
import { BooksListResolver } from '../services/books-list-resolver/books-list-resolver.service';
import { BookReviewResolver } from './books/book-review-resolver/book-review-resolver.service';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { NotificationComponent } from './books/notification/notification.component';
import { NotificationDetailsComponent } from './books/notification-details/notification-details.component';
import { NotificationResolverService } from '../services/notification-resolver/notification-resolver.service';

// const redirectTo = (uri: string) => {
//   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
//   this.router.navigate([uri]));
// }

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    resolve: { profile: ProfileResolver }
  },
  {
    path: 'profile/edit-profile',
    component: ProfileEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuardService],
    resolve: { books: BooksListResolver }
  },
  {
    path: 'books/book-review/:id',
    component: BookReviewComponent,
    canActivate: [AuthGuardService],
    resolve: { book: BookReviewResolver }
  },
  {
    path: 'books/add-book',
    component: AddBookComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'books-borrowed',
    component: BooksBorrowedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'history',
    component: BookHistoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'notification',
    component: NotificationComponent,
    canActivate: [AuthGuardService],
    resolve: { users: NotificationResolverService }
  },
  {
    path: 'notification/details',
    component: NotificationDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-in',
    component: LoginComponent
  },
  {
    path: 'sign-in/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  // { path: 'home', redirectTo: '', pathMatch: 'full'},
  // { path: 'book', component: BookListComponent},
];
