import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  newBooks: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const newBookArr = this.route.snapshot.data.books['books'];

    console.log(newBookArr);
    

    // for (let i = 0; i < newBookArr.length; i++) {
    //   if (this.newBooks.length === 4) {
    //     break;
    //   }
    //   this.newBooks.push(newBookArr[newBookArr.length - (i + 1)]);
    // }
    // this.newBooks = this.chunkArrayInGroups(this.newBooks, 4);
  }

  chunkArrayInGroups(arr, size) {
    const newArr = new Array();

    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

}
