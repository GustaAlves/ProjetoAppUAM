import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Url } from 'url';

export interface Produto{
  photoItem: string;
  nome : string;
  tamanho: string;
  cor : string;
  publico : string;
  valor : string;
  contato : string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private produto: Produto[] = [];

  constructor(private storage: Storage){
    this.loadData();
  }

  private async loadData(){
    const loaded = await this.storage.get('produto') as Produto[];
    this.produto.push( ... loaded);
  }

  private saveData(){
    this.storage.set('produto', this.produto);
  }

  public all(){
    return this.produto;
  }

  public criar(produto: Produto){
    this.produto.push({...produto});
    this.saveData();
  }

  public atualizar(produto: Produto, nome: string){
    const idx = this.produto.findIndex(p => p.nome === nome);
    this.produto[idx] = { ... produto };
    this.saveData();
  }
  public deletar(produto:Produto, nome: string){
    const idx = this.produto.findIndex(p => p.nome === nome);
    produto[idx] = this.produto.splice(idx,1);
    this.saveData();
  }

  public find(nome: string){
    return { ...this.produto.find(p => p.nome === nome) };
  }
}
