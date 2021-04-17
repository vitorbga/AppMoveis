import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswdPage } from './passwd.page';

const routes: Routes = [
  {
    path: '',
    component: PasswdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswdPageRoutingModule {}
