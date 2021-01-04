import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iron-dyamic-table-pagination',
  templateUrl: './dyamic-table-pagination.component.html',
  styleUrls: ['./dyamic-table-pagination.component.scss']
})
export class DyamicTablePaginationComponent implements OnInit {

  _pages: number[] = [];
  _page: number = 1;
  _pagesNumber: number = 0;
  private originalPagesArr = [];

  @Input() set pages(pages: number) {
    this.originalPagesArr = (new Array(pages)).fill(1).map((v, i) => i);
    this._pagesNumber = pages;
    this.calculatePages();
  }

  get pages(): number {
    return this._pagesNumber;
  }

  @Input() set currentPage(page: number) {
    this._page = Math.max(page, 1);
    this.calculatePages();
  }

  get currentPage(): number {
    return this._page;
  }
  @Output() goToPage: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  private calculatePages() {
    let minPage = Math.max(this._page - 2, 0);
    let maxPage = Math.min(this._page + 2, this.originalPagesArr.length);
    this._pages = this.originalPagesArr.slice(minPage, maxPage);
  }

  goTo(page) {
    this.goToPage.emit(page);
  }

}
