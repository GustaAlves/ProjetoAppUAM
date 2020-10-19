import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    loadChildren: () => import('./home/loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
