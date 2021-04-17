import { Component } from '@angular/core';

import { Photo, PhotoService } from '../services/photo.service';

import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) { }


  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
}
