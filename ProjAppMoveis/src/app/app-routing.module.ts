import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tlog/login/login.component';
import { RecsenhaComponent } from './tlog/recsenha/recsenha.component';
import { RegistrarComponent } from './tlog/registrar/registrar.component';
import { HomeComponent } from './share/navegacao/home/home.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'recsenha', component:RecsenhaComponent},
  {path: 'registrar', component:RegistrarComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' } // redirect to `login`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
