import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { RecsenhaComponent } from './recsenha/recsenha.component';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [LoginComponent, RecsenhaComponent, RegistrarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    LoginComponent
  ]
})
export class TlogModule { }
