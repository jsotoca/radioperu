import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmisoraPageRoutingModule } from './emisora-routing.module';

import { EmisoraPage } from './emisora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmisoraPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EmisoraPage]
})
export class EmisoraPageModule {}
