import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage:Storage
  ) { }

  guardarData(llave:string,valor:any){
    this.storage.set(llave,valor);
    console.log("guardado");
    console.log(valor);
  }

  async obtenerData(llave:string){
    const valor = await this.storage.get(llave);
    return valor;
  }
}
