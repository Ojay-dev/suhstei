import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './routes';
import { ProfileComponent, ProfileEditComponent } from './profile';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './auth/footer/footer.component';
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
  ForgotPasswordComponent,
  ResetPasswordComponent,
  EmailCheckComponent
} from './auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    SidebarComponent,
    BookListComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmailCheckComponent,
    FooterComponent,
    BookReviewComponent,
    BooksBorrowedComponent,
    AddBookComponent,
    BookHistoryComponent
  ]
})
export class UserModule { }
