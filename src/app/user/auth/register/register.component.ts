import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthService } from '../services';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  credentials: TokenPayload = {
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    password: ''
  };

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

  }

  register() {
    // console.log(this.registerForm);
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      this.credentials.firstname = formValue.firstName;
      this.credentials.lastname = formValue.lastName;
      this.credentials.email = formValue.email;
      this.credentials.phone = formValue.phoneNo;
      this.credentials.password = formValue.password;

      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigate(['user/registration-successful']);
      }, (err) => {
        console.error(err);
      });
    }
  }

  validateFirstName() {
    return this.registerForm.controls.firstName.valid ||
      this.registerForm.controls.firstName.untouched;
  }

  validateLastName() {
    return this.registerForm.controls.lastName.valid ||
      this.registerForm.controls.lastName.untouched;
  }

  validatePhoneNo() {
    return this.registerForm.controls.phoneNo.valid ||
      this.registerForm.controls.phoneNo.untouched;
  }

  validateEmail() {
    return this.registerForm.controls.email.valid ||
      this.registerForm.controls.email.untouched;
  }

  validatePassword() {
    return this.registerForm.controls.password.valid ||
      this.registerForm.controls.password.untouched;
  }

  validateConfirmPassword() {
    return this.registerForm.controls.confirmPassword.valid ||
      this.registerForm.controls.confirmPassword.untouched;
  }

}
