import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirPage } from './excluir.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirPageRoutingModule {}
