import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: 'valida/valida.page.html',
  styleUrls: ['valida/valida.page.scss']

  
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    
  ) {
    this.initializeApp();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
  alerta1(){
    alert("Por favor, contate um administrador");
    }
validaEntrada(){
  let validaEntrada = document.getElementById("nomeValida").value;
  let senhaEntrada = document.getElementById("senhaValida").value;
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
  if(validaEntrada == "admin" && senhaEntrada == "admin"){
    window.location.href = "carrinho";
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
}}
