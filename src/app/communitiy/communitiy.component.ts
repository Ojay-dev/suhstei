import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-communitiy",
  templateUrl: "./communitiy.component.html",
  styleUrls: ["./communitiy.component.css"],
})
export class CommunitiyComponent implements OnInit {
  // pageId: string = "" + window.location.hash;
  url: string;
  category: string;
  title: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.category = this.route.snapshot.queryParams["category"];
    this.url = this.router.url;
    this.title = `Suhstei Forumn: ${this.category} Genre`;
    // console.log(this.router.url);
  }
}
