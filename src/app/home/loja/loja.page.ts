import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import _ from 'lodash';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {
  querytext:string;
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

  filterProduto(prod: any){
    let val = prod.target.value; 
    this.produto = this.productService.filtrarProdutos(val);

    // let val = prod.target.value;
    // if(val && val.trim() !=''){
    //   this.produto = _.values (this.allprodutos);
    //   this.produto = this.produto.filter((produto) => {
    //     return (produto.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // } else {
    //   this.produto = this.allprodutos;
    // }
  }


}

