import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( public alertCtrl: AlertController) { }
  handlerMessage = '';
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Nombres',
        },
        {
          placeholder: 'Apellidos',
        },
        {
          placeholder: 'Descripción Materia',
          type: 'textarea'
        },
        {
          placeholder: 'Link ionic framework',
          type: 'url'
        },        
        {
          placeholder: 'Fecha',
          type: 'date'
        },
        {
          placeholder: 'Clave',
          type: 'password'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

  

}
