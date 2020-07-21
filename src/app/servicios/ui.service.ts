import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  modoOscuro:boolean = false;
  estaCargando:boolean;

  constructor(
    private storage:StorageService,
    public loadingController:LoadingController
  ) { }

  guardarModoOscuro(){
    this.storage.guardarData("modoOscuro",this.modoOscuro);
  }

  async obtenerModoOscuro(){
    return await this.storage.obtenerData("modoOscuro");
  }
  
  async setearModoVisual(){
    const oscuro = await this.obtenerModoOscuro();
    if(oscuro) this.cambiarModoVisual();
  }

  cambiarModoVisual(){
    document.body.classList.toggle('dark');
    this.modoOscuro = !this.modoOscuro;
    this.guardarModoOscuro();
  }

  async mostrarCargando(message?) {
    this.estaCargando = true;
    return await this.loadingController.create().then(a => {
      a.present().then(() => {
        if (!this.estaCargando) {
          a.dismiss();
        }
      });
    });
  }

  async desactivarCargando() {
    if (this.estaCargando) {
      this.estaCargando = false;
      return await this.loadingController.dismiss();
    }
    return null;
  }

  async present() {
    this.estaCargando = true;
    return await this.loadingController.create({
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.estaCargando) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.estaCargando = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
