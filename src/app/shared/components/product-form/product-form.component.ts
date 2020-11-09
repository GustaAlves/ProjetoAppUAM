import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/services/product.service';
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
