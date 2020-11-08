import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletaItemPage } from './deleta-item.page';

const routes: Routes = [
  {
    path: '',
    component: DeletaItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletaItemPageRoutingModule {}
