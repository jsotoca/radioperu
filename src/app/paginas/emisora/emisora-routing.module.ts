import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmisoraPage } from './emisora.page';

const routes: Routes = [
  {
    path: '',
    component: EmisoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmisoraPageRoutingModule {}
