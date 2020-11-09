import { Component, OnInit } from '@angular/core';
import{Produto} from '../loja.page';
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

  constructor() { }
  
  abrirLoja(){
    window.location.href = "loja";
  }

  ngOnInit() {
  }

  public handleAdded(){
    console.log(this.emptyProduto);
  }

}
