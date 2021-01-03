import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { InfiniteComponent } from './infinite/infinite.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FormsModule } from '@angular/forms';
import { DyamicTablePaginationComponent } from './dyamic-table-pagination/dyamic-table-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationTableComponent,
    InfiniteComponent,
    DynamicTableComponent,
    DyamicTablePaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
