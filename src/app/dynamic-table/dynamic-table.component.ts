import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iron-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() tHeaders: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
