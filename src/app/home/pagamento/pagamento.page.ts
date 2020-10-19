import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

    constructor() { }

    finalizarPagamento() {
        alert("Teste de confirmacao");
        window.location.href = "loja";
    }

  ngOnInit() {
  }

}
