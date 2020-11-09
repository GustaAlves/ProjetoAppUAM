import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valida',
  templateUrl: './valida.page.html',
  styleUrls: ['./valida.page.scss'],
})
export class ValidaPage implements OnInit {

  constructor() { }
  alerta1(){
    alert("Por favor, contate um administrador");
    }
validaEntrada(){
  let senhaEntrada = (document.getElementById("senhaValida") as HTMLInputElement).value;
  
  if(senhaEntrada == ""){
    document.getElementById("p1").innerHTML = "Digite uma senha";
    this.validaEntrada();
    return false;
  }
  if(senhaEntrada == "admin"){
    window.location.href = "deleta-item";
    return false;
  }
  if(senhaEntrada != "admin"){
    document.getElementById("p1").innerHTML = "Senha inválida";
    this.validaEntrada();
    return false;
  }
else{
  alert("Contate um administrador")
}
}
  ngOnInit() {
  }

}
