import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySignUpPage } from './company-sign-up/company-sign-up.page';

const routes: Routes = [
  {
    path: 'sign-up',
    component: CompanySignUpPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyPageRoutingModule {}
