import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'sobre',
        pathMatch: 'full'
      },
      {
        path: 'sobre',
        loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
      },
      {
        path: 'loja',
        loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
      },
      
    ]
    
  },
  {
    path: 'deleta-item',
    loadChildren: () => import('./deleta-item/deleta-item.module').then( m => m.DeletaItemPageModule)
  },
  {
    path: 'criar',
    loadChildren: () => import('./criar/criar.module').then( m => m.CriarPageModule)
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
