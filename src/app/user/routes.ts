import { Routes } from '@angular/router';

import { ProfileComponent, ProfileEditComponent } from './profile';
import {
  BookListComponent,
  BookReviewComponent,
  BooksBorrowedComponent
} from './books';

import {
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent
} from './auth';

export  const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit-profile', component: ProfileEditComponent},
  { path: 'books', component: BookListComponent},
  { path: 'books/book-review', component: BookReviewComponent},
  { path: 'books-borrowed', component: BooksBorrowedComponent},
  { path: 'sign-in', component: LoginComponent},
  { path: 'sign-in/forgot-password', component: ForgotPasswordComponent},
  { path: 'sign-up', component: RegisterComponent},
  // { path: 'home', redirectTo: '', pathMatch: 'full'},
  // { path: 'book', component: BookListComponent},
];
