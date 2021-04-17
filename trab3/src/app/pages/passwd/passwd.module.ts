import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswdPageRoutingModule } from './passwd-routing.module';

import { PasswdPage } from './passwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswdPageRoutingModule
  ],
  declarations: [PasswdPage]
})
export class PasswdPageModule {}
