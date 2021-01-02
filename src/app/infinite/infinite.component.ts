import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iron-infinite',
  templateUrl: './infinite.component.html',
  styleUrls: ['./infinite.component.scss']
})
export class InfiniteComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(e: any): void {
  e.preventDefault();
  this.searchTerm = '';
  console.log("Hello World!", this.searchTerm);
}

}
