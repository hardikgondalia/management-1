import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanySignUpPage } from './company-sign-up/company-sign-up.page';
import { CompanyPageRoutingModule } from './company-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CompanySignUpPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyPageRoutingModule,
    IonicModule
  ]
})
export class CompanyModule { }
