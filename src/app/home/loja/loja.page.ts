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
    {nome: 'Blusa moletom Atlética Grifo', tamanho:'G', cor:'Verde', publico:'Unisex', valor:'30', contato:'(11) 99939-6302'},
{nome: 'Jaqueta Corta Vento', tamanho:'M', cor:'Branco', publico:'Masculino', valor:'20', contato:'(11) 93864-7234'},
{nome: 'Regata Furacão Primata', tamanho:'G', cor:'Azul/Branco', publico:'Feminino', valor:'10', contato:'(11) 92905-2257'},
{nome: 'Terno completo', tamanho:'P', cor:'Preto', publico:'Masculino', valor:'70', contato:'(11) 99403-0466'},
{nome: 'Chuteira Futsal', tamanho:'35', cor:'Azul', publico:'Feminino', valor:'30', contato:'(13) 98560-2811'},
{nome: 'Tênis basquete', tamanho:'43', cor:'Laranja/Preto', publico:'Masculino', valor:'40', contato:'(11) 92658-7951'},
{nome: 'Conjunto Atlética Gorila', tamanho:'PP', cor:'Azul', publico:'Feminino', valor:'50', contato:'(11) 90442-1858'},
{nome: 'Blusa moletom NDU', tamanho:'P', cor:'Preto', publico:'Masculino', valor:'35', contato:'(11) 94226-4604'}
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

  abrirCriar(){
    window.location.href = "criar";
  
  }
  ngOnInit() {
  }

}
