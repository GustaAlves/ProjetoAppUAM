import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';
import { ProductDetailsComponent } from 'src/app/home/product-details/product-details.component';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.page.html',
  styleUrls: ['./excluir.page.scss'],
})
export class ExcluirPage implements OnInit {
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

  ngOnInit() {
  }

}
