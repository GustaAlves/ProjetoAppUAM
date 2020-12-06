import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService, Produto } from 'src/app/services/product.service';
import { ProductDetailsComponent } from 'src/app/home/product-details/product-details.component';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.page.html',
  styleUrls: ['./excluir.page.scss'],
})

  
  
export class ExcluirPage implements OnInit {


  constructor(private productService: ProductService,
    private navCtrl: NavController, private modalControler: ModalController,
    public alertController: AlertController) { 
    
  }
  public emptyProduto: Produto = {
    photoItem:'',
    nome : '',
    tamanho: '',
    cor : '',
    publico : '',
    valor : '',
    contato : '',
  };
  
    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Excluir item',
      message: 'Item excluido com êxito',
      buttons: ['OK']
    });

    await alert.present();}
  ngOnInit() {
  }
    public handleDeletar(produto,nome){
      this.presentAlert();
      this.productService.deletar(produto, nome);
  }

public produto = this.productService.all();
  


public async openModal(produto : Produto){
  const modal = await this.modalControler.create({
    component: ProductDetailsComponent,
    componentProps:{
      produto
    }
  });
  modal.present();
}
}



