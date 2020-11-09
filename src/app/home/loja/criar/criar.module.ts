import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CriarPage } from './criar.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CriarPageRoutingModule } from './criar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CriarPageRoutingModule
  ],
  declarations: [CriarPage]
})
export class CriarPageModule {}
