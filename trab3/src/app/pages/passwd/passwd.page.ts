import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-passwd',
  templateUrl: './passwd.page.html',
  styleUrls: ['./passwd.page.scss'],
})
export class PasswdPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso!',
      message: '<strong>Email de Recuperação de Senha Enviado!</strong>',
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


}
