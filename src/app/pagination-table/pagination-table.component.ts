import { Component, OnInit } from '@angular/core';

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

