import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.firstName = this.authService.currentUser.firstName;
    this.lastName = this.authService.currentUser.lastName;
    this.email = this.authService.currentUser.email;
    this.phoneNo = this.authService.currentUser.phoneNo;

  }

}
