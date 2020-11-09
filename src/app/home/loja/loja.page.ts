import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';



@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {
 
  public produto = this.productService.all();
  
  constructor(
    private modalControler: ModalController,
    private productService: ProductService
    ) { }
  
  public async openModal(produto : Produto){
    const modal = await this.modalControler.create({
      component: ProductDetailsComponent,
      componentProps:{
        produto
      }
    });
    modal.present();
  }

  abrirCriar(){
    window.location.href = "criar";
  }
  ngOnInit() {
  }

}
