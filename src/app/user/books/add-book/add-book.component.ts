import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/services';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newBookForm: FormGroup;
  private bookTitle: FormControl;
  private author: FormControl;
  private bookReview: FormControl;
  private avatar: FormControl;
  percentDone: any = 0;

  constructor(private bookService: BookService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.bookTitle = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.author = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.bookReview = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.maxLength(400)]);
    this.avatar = new FormControl('', [Validators.required]);

    this.newBookForm = this.fb.group({
      bookTitle: this.bookTitle,
      author: this.author,
      bookReview: this.bookReview,
      avatar: [null]
    });
  }

  fileLoader() {
    const fileInput: HTMLElement = document.querySelector('#FileUpload1');
    fileInput.click();
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    const filePath: HTMLElement = document.querySelector('#spnFilePath');
    filePath.innerHTML = `<b>Selected File: </b> ${file.name}`;
    console.log(file);

    this.newBookForm.patchValue({
      avatar: file
    });
    this.newBookForm.get('avatar').updateValueAndValidity();
  }

  saveNewBook(newBookForm) {
    if (this.newBookForm.valid) {

      console.log(newBookForm);

      this.bookService.saveBook(
        this.newBookForm.value.bookTitle,
        this.newBookForm.value.author,
        this.newBookForm.value.bookReview,
        this.newBookForm.value.avatar,
      ).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.percentDone = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.percentDone}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            this.percentDone = false;
            this.router.navigate(['user/books']);
        }
      });
    }
  }

  validBookTitle() {
    return this.bookTitle.valid || this.bookTitle.untouched;
  }

  validAuthor() {
    return this.author.valid || this.author.untouched;
  }

  validBookReview() {
    return this.bookReview.valid || this.bookReview.untouched;
  }

}
