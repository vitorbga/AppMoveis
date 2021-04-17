import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-embarcados',
  templateUrl: './embarcados.page.html',
  styleUrls: ['./embarcados.page.scss'],
})
export class EmbarcadosPage implements OnInit {

  constructor(private nav:NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso!',
      message: '<strong>Hardware Embarcado Cadastrado!</strong>',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  navegar() {
    this.nav.navigateForward('')
  }
}
