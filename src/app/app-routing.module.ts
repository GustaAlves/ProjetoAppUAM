import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./home/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'valida',
    loadChildren: () => import('./home/valida/valida.module').then( m => m.ValidaPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./home/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'loja',
      loadChildren: () => import('./home/loja/loja.module').then(m => m.LojaPageModule)
  },
  {
    path: "pagamento",
      loadChildren: () => import('./home/pagamento/pagamento.module').then(m => m.PagamentoPageModule)
  },
  {
    path: 'deleta-item',
    loadChildren: () => import('./home/deleta-item/deleta-item.module').then( m => m.DeletaItemPageModule)
  }
];

;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
