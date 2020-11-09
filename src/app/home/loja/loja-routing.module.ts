import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaPage } from './loja.page';

const routes: Routes = [
  {
    path: '',
    component: LojaPage,
    children: [
      {
        path: 'criar',
        loadChildren: () => import('./criar/criar.module').then( m => m.CriarPageModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
      }
    ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaPageRoutingModule {}
