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
import { ProfileResolver } from './auth/services/profile-resolver/profile-resolver.service';

// const redirectTo = (uri: string) => {
//   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
//   this.router.navigate([uri]));
// }

export  const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService], resolve: {profile: ProfileResolver} },
  { path: 'profile/edit-profile', component: ProfileEditComponent, canActivate: [AuthGuardService] },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuardService] },
  { path: 'books/book-review', component: BookReviewComponent, canActivate: [AuthGuardService] },
  { path: 'books/add-book', component: AddBookComponent, canActivate: [AuthGuardService] },
  { path: 'books-borrowed', component: BooksBorrowedComponent, canActivate: [AuthGuardService] },
  { path: 'history', component: BookHistoryComponent, canActivate: [AuthGuardService] },
  { path: 'sign-in', component: LoginComponent},
  { path: 'sign-in/forgot-password', component: ForgotPasswordComponent},
  { path: 'sign-up', component: RegisterComponent},
  // { path: 'home', redirectTo: '', pathMatch: 'full'},
  // { path: 'book', component: BookListComponent},
];
