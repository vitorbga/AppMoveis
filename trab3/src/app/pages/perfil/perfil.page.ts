import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private nav:NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  navegar() {
    this.nav.navigateForward('')
  }
}
