import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Produto} from 'src/app/home/loja/loja.page'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input() produto: Produto;
  @Output() added = new EventEmitter(); 

  constructor() { }

  ngOnInit() {}

}
