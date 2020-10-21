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
  let validaEntrada = (document.getElementById("nomeValida")).nodeValue;
  let senhaEntrada = (document.getElementById("senhaValida")).nodeValue;
  if(validaEntrada == "")
  {
    document.getElementById("p1").innerHTML = "Digite um usuário";
    document.getElementById("nomeValida").focus();
    validaEntrada();
    return false;
  }
  if(senhaEntrada == ""){
    document.getElementById("p1").innerHTML = "Digite uma senha";
    validaEntrada();
    return false;
  }
  if(validaEntrada == "Luiz" && senhaEntrada == "admin"){
    window.location.href = "loja";
    return false;

  }
  if(validaEntrada != "admin" && senhaEntrada != "admin"){
    alert("Usuário ou senha inválidos");
    validaEntrada();
    return false;
  }
else{
  alert("Contate um administrador")
}
}
  ngOnInit() {
  }

}
