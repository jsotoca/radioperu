import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  modoOscuro:boolean = false;

  constructor(
    private storage:StorageService
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

}
