import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletaItemPageRoutingModule } from './deleta-item-routing.module';

import { DeletaItemPage } from './deleta-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletaItemPageRoutingModule
  ],
  declarations: [DeletaItemPage]
})
export class DeletaItemPageModule {}
