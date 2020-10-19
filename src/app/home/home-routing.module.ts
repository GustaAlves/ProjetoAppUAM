import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'sobre',
        loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
      },
      {
        path: 'loja',
        loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
      },
      {
        path: 'valida',
        loadChildren: () => import('./valida/valida.module').then( m => m.ValidaPageModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
      },
      {
        path: '',
        redirectTo: 'loja',
        pathMatch: 'full'
      },

    ]
    
  },  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
