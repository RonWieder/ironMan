import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iron-infinite',
  templateUrl: './infinite.component.html',
  styleUrls: ['./infinite.component.scss']
})
export class InfiniteComponent implements OnInit {

  fields: string[] = ['text', 'likes', 'tags', 'publishDate'];

  constructor() { }

  ngOnInit(): void {
  }
}
