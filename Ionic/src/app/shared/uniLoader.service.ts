import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';   // è un indicator activity predefinito di Ionic
import { LoadingOptions } from '@ionic/core';     // fornisce le caratteristiche all'indicator activity

@Injectable()
export class UniLoaderService {

    constructor(private loadingCtrl: LoadingController) {}

    async show() {

        const options: LoadingOptions = {
            spinner: 'circles',
            message: 'Please wait...'
        };

        const alert = await this.loadingCtrl.create(options);
        alert.present();    // avvia l'indicator activity

    }

    async dismiss() {
        return await this.loadingCtrl.dismiss();   // rimuove l'indicator activity
    }

}
