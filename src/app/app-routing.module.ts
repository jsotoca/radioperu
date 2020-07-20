import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contenido',
    pathMatch: 'full'
  },
  {
    path: 'contenido',
    loadChildren: () => import('./paginas/contenido/contenido.module').then( m => m.ContenidoPageModule)
  },
  {
    path: 'emisora',
    loadChildren: () => import('./paginas/emisora/emisora.module').then( m => m.EmisoraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
