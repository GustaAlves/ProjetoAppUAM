import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.page.html',
  styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {

  public emptyProduto: Produto = {
    nome : '',
    tamanho: '',
    cor : '',
    publico : '',
    valor : '',
    contato : '',
  };

  constructor(
    private productService: ProductService,
    private navCtrl: NavController
    ) { }
  
  abrirLoja(){
    window.location.href = "loja";
  }

  ngOnInit() {
  }

  public handleAdded(){
    this.productService.criar(this.emptyProduto);
    this.navCtrl.back;
  }

}
