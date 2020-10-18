import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidaPage } from './valida.page';

const routes: Routes = [
  {
    path: '',
    component: ValidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidaPageRoutingModule {}
