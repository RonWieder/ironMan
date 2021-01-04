import { AfterContentInit, Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';

@Directive({
  selector: '[ironInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterContentInit, OnDestroy {

  @Input('ironInfiniteScroll') enable = true;
  @Output() bottomReached: EventEmitter<void> = new EventEmitter();

  private subscription: Subscription;

  constructor(private host: DynamicTableComponent) { }

  ngAfterContentInit(): void {

    if (this.enable) {
      this.subscription = fromEvent(this.host.getScrollContainer(), 'scroll').pipe(debounceTime(100)).subscribe((event: MouseEvent) => {
        const element = event.target as HTMLElement;
        const reachBottom = element.scrollTop >= (element.scrollHeight - element.offsetHeight - (element.offsetHeight * 0.1));
        if (reachBottom) {
          this.bottomReached.emit();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
