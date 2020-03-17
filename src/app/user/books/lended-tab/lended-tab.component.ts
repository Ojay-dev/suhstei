import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/services';
import { ActivatedRoute, Router } from '@angular/router';
import { IPaginage } from 'src/app/shared/paginateConfig';
import { RequestService } from 'src/app/services/request-service/request.service';

@Component({
  selector: 'app-lended-tab',
  templateUrl: './lended-tab.component.html',
  styleUrls: ['./lended-tab.component.css']
})
export class LendedTabComponent implements OnInit {

  @Input() bookRequestData;
  lendedBooks: any;
  ifBooksLended: boolean;
  config: IPaginage;

  constructor(
    private authService: AuthService,
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

    this.lendedBooks = this.bookRequestData.filter(d => {
      if (
        d.book_requested.uploader_id === this.authService.getUserDetails()._id &&
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

    this.lendedBooks = chunkArrayInGroups(this.lendedBooks, 4);
    this.ifBooksLended = this.lendedBooks.length <= 0 ? false : true;

    console.log(this.lendedBooks);
  }

  onBookReturn(lendedItem) {

    lendedItem.returned = true;

    this.requestService.updateRequest(lendedItem)
      .subscribe(() => {
        console.log('Successfull!!!');
        this.router.navigate(['/user/timeline']);
      }, (err) => {
        console.error(err);
      });
  }

  pageChange(newPage: number) {
    this.router.navigate(['user/books-borrowed'], { queryParams: { page: newPage } });
  }

}
