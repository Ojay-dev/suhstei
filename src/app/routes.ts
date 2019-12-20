import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { Error404Component } from './errors/page-404/404.component';
import { SearchComponent } from './search/search.component';

export  const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'book', component: BookListComponent},
  { path: 'search-result', component: SearchComponent},
  // { path: '404', component: Error404Component},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '**', component: Error404Component }
];
