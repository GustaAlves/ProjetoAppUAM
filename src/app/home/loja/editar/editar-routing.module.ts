import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPage } from './editar.page';

const routes: Routes = [
  {
    path: ':nome',
    component: EditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPageRoutingModule {}
