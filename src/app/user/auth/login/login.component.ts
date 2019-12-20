import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  mouseverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(formsValue) {
    this.authService.loginUser(formsValue.email, formsValue.password);
    this.router.navigate(['user/profile']);
  }

}
