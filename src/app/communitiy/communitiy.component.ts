import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communitiy',
  templateUrl: './communitiy.component.html',
  styleUrls: ['./communitiy.component.css']
})
export class CommunitiyComponent implements OnInit {

  pageId: string = '' + window.location.hash;
  url: string = '' + window.location.href;

  constructor() { }

  ngOnInit() {
  }

}
