import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/services/product.service';
import { CameraResultType, Plugins } from "@capacitor/core";
import { EMPTY, empty } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  

  @Input() produto: Produto;
  @Output() added = new EventEmitter();

  constructor() {}
  
  public async getPhoto() {
    const photo = await Plugins.Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    });
    this.produto.photoItem = photo.dataUrl
  }
    

  ngOnInit() {
    this.produto.photoItem = "https://www.strokejoinville.com.br/wp-content/uploads/sites/804/2017/05/produto-sem-imagem-1.gif"
  }

}
