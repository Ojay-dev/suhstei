import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration-success',
  templateUrl: './registeration-success.component.html',
  styleUrls: ['./registeration-success.component.css'],
})
export class RegisterationSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000 * 5);
  }
}
