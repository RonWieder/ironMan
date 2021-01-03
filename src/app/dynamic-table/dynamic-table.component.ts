import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'iron-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() data: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
  }

  ngOnChanges(changesObj) {
    console.log(changesObj);
}

}
