import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisitorCheckInPage } from './visitor-check-in/visitor-check-in.page';
import { VisitorCheckOutPage } from './visitor-check-out/visitor-check-out.page';

const routes: Routes = [
  {
    path: 'check-in',
    component: VisitorCheckInPage,
  },
  {
    path: 'check-out',
    component: VisitorCheckOutPage,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
