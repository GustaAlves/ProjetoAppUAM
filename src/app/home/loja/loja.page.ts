import { Component, OnInit } from '@angular/core';

interface Produto{
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
  
  constructor() { }

  ngOnInit() {
  }

}
