import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from '../app.module';
import { CriarPageModule } from '../home/loja/criar/criar.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent],
})
export class SharedModule { }
