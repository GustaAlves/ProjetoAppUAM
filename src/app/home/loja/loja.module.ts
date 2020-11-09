import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaPageRoutingModule } from './loja-routing.module';

import { LojaPage } from './loja.page';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LojaPageRoutingModule
  ],
  declarations: [LojaPage, ProductDetailsComponent]
})
export class LojaPageModule {}

