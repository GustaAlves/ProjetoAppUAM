import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidaPageRoutingModule } from './valida-routing.module';

import { ValidaPage } from './valida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidaPageRoutingModule
  ],
  declarations: [ValidaPage]
})
export class ValidaPageModule {}
