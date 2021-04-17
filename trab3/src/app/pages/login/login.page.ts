import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  
  navegarP() {
    this.nav.navigateForward('perfil')
  } 
  navegarS() {
    this.nav.navigateForward('salas')
  } 
  navegarE() {
    this.nav.navigateForward('embarcados')
  } 
  
}
