import { ReproductorComponent } from './reproductor/reproductor.component';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CabeceraComponent,ReproductorComponent],
  exports: [CabeceraComponent,ReproductorComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
