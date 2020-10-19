import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

    constructor() { }

    fazerPagamento() {
        window.location.href = "pagamento";
        return false;
    }

  ngOnInit() {
  }

}
