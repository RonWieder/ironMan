import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { DummyDataService } from '../services/dummy-data.service';

@Component({
  selector: 'iron-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PaginationTableComponent implements OnInit {

  data$: Observable<Post[]>;
  headers$: Observable<string[]>
  numOfPages: number;
  next: boolean = true;
  previous: boolean = false;
  currentPage: number = 0;

  constructor(private dummyDataService: DummyDataService) { }


  ngOnInit(): void {
    this.data$ = this.dummyDataService.getPostsForPage(20, this.currentPage);
    this.dummyDataService.getNumOfPages(20, this.currentPage)
    .subscribe(pages => this.numOfPages = pages);
  }

  private nextPage() {
    if (!this.next)
      return;
    this.currentPage = this.currentPage + 1;
    this.data$ = this.dummyDataService.getPostsForPage(20, this.currentPage);
    if (this.currentPage === this.numOfPages - 1)
      this.next = false;
    if (!this.previous)
      this.previous = true;
  }

  private previousPage() {
    if (!this.previous)
      return;
    this.currentPage-=1;
    this.data$ = this.dummyDataService.getPostsForPage(20, this.currentPage);
    if (this.currentPage === 0)
      this.previous = false;
    if (!this.next)
      this.next = true;
  }

  goTo(e) {
    console.log(e);
  }

  }

