import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { LoaderPosition } from './loader-position.enum';

@Component({
  selector: 'iron-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() data: Post[];
  @Input() fields: string[];
  @Input() loading: boolean;
  @Input() loaderPosition: LoaderPosition = LoaderPosition.Bottom;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  getScrollContainer(): HTMLElement {
    return this.element.nativeElement.querySelector(".table-responsive");
  }

}
