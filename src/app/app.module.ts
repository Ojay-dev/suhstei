import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { BookListComponent } from './book-list/book-list.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth/services';
import {
  BookService,
  BooksListResolver,
  BookViewResolver,
  SearchResolver
} from './services';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Error404Component } from './errors/page-404/404.component';
import { SearchComponent } from './search/search.component';
import { IcomoonComponent } from './icomoon/icomoon.component';
import { BookViewComponent } from './book-view/book-view.component';
import { UserResolver } from './services/user-resolver/user-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    BookListComponent,
    Error404Component,
    SearchComponent,
    IcomoonComponent,
    BookViewComponent
  ],
  providers: [
    AuthService,
    BookService,
    BooksListResolver,
    BookViewResolver,
    SearchResolver,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
