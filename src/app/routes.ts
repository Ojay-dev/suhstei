import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookListComponent } from './book-list/book-list.component';

export  const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'book', component: BookListComponent},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
];
