import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, Observable } from 'rxjs';
import { map, scan, switchMap, tap } from 'rxjs/operators';
import { Posts } from '../model/posts';
import { DummyDataService } from '../services/dummy-data.service';
import { PaginationType } from './pagination-type.enum';

@Component({
  selector: 'iron-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent implements OnInit {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private currentPage: BehaviorSubject<number> = new BehaviorSubject(0);
  searchTerm: string = '';
  private readonly recordsOnPage: number = 20;

  loading$ = this.loading.asObservable();
  currentPage$ = this.currentPage.asObservable();

  @Input() fields: string[] = [];
  @Input() showSearchBox = false;
  @Input() paginationType = PaginationType.Pagination;

  data$: Observable<Posts>;

  constructor(private dummyDataService: DummyDataService) { }

  ngOnInit(): void {
    this.data$ = this.currentPage$.pipe(
      tap(() => this.setLoading(true)),
      switchMap(currentPage => this.dummyDataService.fetch(this.recordsOnPage, currentPage, this.searchTerm)),
      scan((acc, posts) => {
        const data = this.paginationType === PaginationType.Infinite ? [...acc.data, ...posts.data] : posts.data;
        return {
          ...posts,
          data
        };
      }, { data: [] } as Posts),
      tap(() => this.setLoading(false))
    );
  }

  private setLoading(loading = true) {
    this.loading.next(loading);
  }

  goTo(page: number) {
    this.currentPage.next(page);
  }

  filterTable() {
    this.currentPage.next(0);
  }

  loadMore() {
    if (this.loading.getValue()) return;
    this.goTo(this.currentPage.getValue() + 1);
  }

}

