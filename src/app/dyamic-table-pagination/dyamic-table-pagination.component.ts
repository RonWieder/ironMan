import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iron-dyamic-table-pagination',
  templateUrl: './dyamic-table-pagination.component.html',
  styleUrls: ['./dyamic-table-pagination.component.scss']
})
export class DyamicTablePaginationComponent implements OnInit {

  _pagesToDisplay: number[] = [];
  _page: number = 1;
  _numOfPages: number = 0;
  private originalPagesArr = [];

  @Input() set pages(pages: number) {
    this.originalPagesArr = (new Array(pages)).fill(1).map((v, i) => i);
    this._numOfPages = pages;
    this.calculatePages();
  }

  get pages(): number {
    return this._numOfPages;
  }

  @Input() set currentPage(page: number) {
    this._page = Math.max(page + 1, 0);
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
    const startCondition: boolean = this._page === 1 || this._page === 2 ? true : false;
    const endCondition: boolean = this._page === this._numOfPages || this._page + 1 === this._numOfPages ? true : false;
    let minPage: number = startCondition ? 0 : endCondition ? this._numOfPages - 3 : Math.max(this._page - 2, 0);
    let maxPage: number = endCondition ? this._numOfPages : startCondition ? 3 : Math.min(this._page + 1, this.originalPagesArr.length);
    this._pagesToDisplay = this.originalPagesArr.slice(minPage, maxPage);
  }

  goTo(page) {
    this.goToPage.emit(page);
  }

}
