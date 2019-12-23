import { Injectable } from '@angular/core';
import { IUser } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: Math.random(),
      firstName: 'Shenske',
      lastName: 'Nakamura',
      email: 'shenske.nakam@gmail.com',
      phoneNo: '08034567890'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string, email: string, phoneNo: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.currentUser.email = email;
    this.currentUser.phoneNo = phoneNo;
  }
}
