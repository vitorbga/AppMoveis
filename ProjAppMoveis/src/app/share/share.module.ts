import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [MenuComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    MenubarModule
    
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class ShareModule { }
