import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, from, merge, Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Post } from '../model/post';
import { Posts } from '../model/posts';
import { DummyDataService } from '../services/dummy-data.service';

@Component({
  selector: 'iron-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PaginationTableComponent implements OnInit {

  fields: string[] = ['text', 'likes', 'tags'];
  constructor() { }

  ngOnInit(): void { }

}

