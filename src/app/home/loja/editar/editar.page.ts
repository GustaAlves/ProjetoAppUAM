import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  public produto: Produto;
  private nome: string;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome');
    this.produto = this.productService.find(this.nome);
  }

  public handleSave(){
    this.productService.atualizar(this.produto, this.nome);
    this.navCtrl.back();
  }

}
