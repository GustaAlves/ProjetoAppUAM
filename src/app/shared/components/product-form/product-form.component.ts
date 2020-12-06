import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/services/product.service';
import { CameraResultType, Plugins } from "@capacitor/core";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public photo: string;

  @Input() produto: Produto;
  @Output() added = new EventEmitter();

  constructor() { }

  public async getPhoto() {
    const photo = await Plugins.Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    });
    this.photo = photo.dataUrl;
    }
    

  ngOnInit() {}

}
