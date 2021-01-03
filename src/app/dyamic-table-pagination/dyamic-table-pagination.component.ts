import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'iron-dyamic-table-pagination',
  templateUrl: './dyamic-table-pagination.component.html',
  styleUrls: ['./dyamic-table-pagination.component.scss']
})
export class DyamicTablePaginationComponent implements OnInit {

  @Input() numOfPages: number;
  @Input() currentPage: number;
  @Input() next: boolean = true;
  @Input() previous: boolean = true;
  @Output() goToPage: EventEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  goTo(order) {
    this.goToPage.emit(order);
}

}
