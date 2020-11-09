import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { __importDefault } from 'tslib';

import { Produto } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

@Input() produto: Produto;

  constructor(private ModalController: ModalController) { }

  ngOnInit() {
    console.log(this.produto);
  }
  public closeModal(){
    this.ModalController.dismiss();
  }
}
