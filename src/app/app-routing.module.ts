import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteComponent } from './infinite/infinite.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pagination' },
  { path: 'pagination', component: PaginationComponent },
  { path: 'infinite', component: InfiniteComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/pagination' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
