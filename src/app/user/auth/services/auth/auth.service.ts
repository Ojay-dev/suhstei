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
      // id: Math.random(),
      avatar: '',
      firstName: 'Shenske',
      lastName: 'Nakamura',
      email: 'shenske.nakam@gmail.com',
      phoneNo: '08034567890'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(avatar: string, firstName: string, lastName: string, email: string, phoneNo: string) {
    this.currentUser.avatar = avatar;
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.currentUser.email = email;
    this.currentUser.phoneNo = phoneNo;
  }
}
