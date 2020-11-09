import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {produto} from '../loja/loja.page';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
