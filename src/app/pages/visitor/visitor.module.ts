import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorCheckInPage } from './visitor-check-in/visitor-check-in.page';
import { VisitorCheckOutPage } from './visitor-check-out/visitor-check-out.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [VisitorCheckInPage,VisitorCheckOutPage],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class VisitorModule { }
