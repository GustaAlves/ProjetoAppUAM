import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export interface Produto{
  nome : string;
  tamanho: string;
  cor : string;
  publico : string;
  valor : string;
  contato : string;
}

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {
 
  public produto : Produto[] = [
    {nome: 'Camisa 1', tamanho:'M', cor:'Azul', publico:'Masculino', valor:'30', contato:'(11) 4002-8922'}
  ]
  
  constructor(private modalControler: ModalController) { }
  
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
