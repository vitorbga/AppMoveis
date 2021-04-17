import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav:NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
