import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EmisoraI } from '../interfaces/emisoras.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public emisorasFavoritas:EmisoraI[] = [];

  constructor(
    private storage:Storage
  ) { 
    this.cargarEmisoras();
  }

  async cargarEmisoras(){
    const emisoras:EmisoraI[] = await this.obtenerData('emisorasFavoritas');
    if(emisoras) this.emisorasFavoritas = emisoras;
  }

  async guardarEmisora(emisora:EmisoraI){
    await this.cargarEmisoras();
    const encontrado = await this.emisorasFavoritas.find(e => e.titulo == emisora.titulo);
    if(encontrado) this.eliminarEmisora(emisora);
    else {
      this.emisorasFavoritas.unshift(emisora);
      this.guardarData('emisorasFavoritas',this.emisorasFavoritas);
    }
  }

  async emisoraYaGuardada(emisora:EmisoraI){
    await this.cargarEmisoras();
    const encontrado = this.emisorasFavoritas.find(e => e.stream == emisora.stream);
    return (encontrado)? true:false;
  }

  async yaGuardado(emisora:EmisoraI){
    await this.cargarEmisoras();
    const encontrado = this.emisorasFavoritas.find(e => e.stream == emisora.stream);
    return (encontrado)? true:false;
  }

  async eliminarEmisora(emisora:EmisoraI){
    this.emisorasFavoritas = this.emisorasFavoritas.filter(e => e.stream !== emisora.stream);
    this.guardarData('emisorasFavoritas',this.emisorasFavoritas);
  }

  guardarData(llave:string,valor:any){
    this.storage.set(llave,valor);
  }

  async obtenerData(llave:string){
    const valor = await this.storage.get(llave);
    return valor;
  }
}
