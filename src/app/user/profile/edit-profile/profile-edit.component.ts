import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private phoneNo: FormControl;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );

    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );

    this.email = new FormControl(
      {value: this.authService.currentUser.email, disabled: true},
      Validators.required
    );

    this.phoneNo = new FormControl(
      this.authService.currentUser.phoneNo,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNo: this.phoneNo
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName,
        formValues.email,
        formValues.phoneNo
      );
      this.router.navigate(['user/profile'])
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validatePhoneNo() {
    return this.phoneNo.valid || this.phoneNo.untouched;
  }

  fileLoader() {
    const fileInput: HTMLElement = document.querySelector('#fileLoader');
    fileInput.click();
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      const avatarImg: HTMLImageElement = document.querySelector('.image-wrapper img');
      avatarImg.src = URL.createObjectURL(event.target.files[0]);
    }
  }

}
