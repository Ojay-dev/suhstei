import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/services';
import { Router, ActivatedRoute } from '@angular/router';
import { IPaginage } from 'src/app/shared/paginateConfig';

@Component({
  selector: 'app-borrowed-tab',
  templateUrl: './borrowed-tab.component.html',
  styleUrls: ['./borrowed-tab.component.css']
})
export class BorrowedTabComponent implements OnInit {
  @Input() bookRequestData;
  borrowedBooks: any;
  ifBooksBorrowed: boolean;
  config: IPaginage;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1
    );
  }

  ngOnInit(): void {

    this.borrowedBooks = this.bookRequestData.filter(d => {
      if (
        d.requester._id === this.authService.getUserDetails()._id &&
        d.approved === true &&
        d.returned === false
      ) {
        return d;
      }
    });

    const chunkArrayInGroups = (arr, size) => {
      const newArr = new Array();

      for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }
      return newArr;
    };

    this.borrowedBooks = chunkArrayInGroups(this.borrowedBooks, 4);
    this.ifBooksBorrowed = this.borrowedBooks.length <= 0 ? false : true;
  }

  pageChange(newPage: number) {
    this.router.navigate(['user/books-borrowed'], { queryParams: { page: newPage } });
  }

}


