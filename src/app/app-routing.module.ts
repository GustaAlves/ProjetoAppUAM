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
  },
  {
    path: 'criar',
    loadChildren: () => import('./home/loja/criar/criar.module').then( m => m.CriarPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./home/loja/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'deleta',
    loadChildren: () => import('./loja/deleta/deleta.module').then( m => m.DeletaPageModule)
  },
  {
    path: 'deleta-item',
    loadChildren: () => import('./loja/deleta-item/deleta-item.module').then( m => m.DeletaItemPageModule)
  },
  {
    path: 'excluir',
    loadChildren: () => import('./loja/excluir/excluir.module').then( m => m.ExcluirPageModule)
  },
  {
    path: 'excluir',
    loadChildren: () => import('./excluir/excluir.module').then( m => m.ExcluirPageModule)
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
