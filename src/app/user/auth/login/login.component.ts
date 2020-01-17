import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  unAuthorized = false;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigate(['user/profile']);
    }, (err) => {
      this.unAuthorized = true;
      console.error(err);
    });
  }

}
