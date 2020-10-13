import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  
  }
alerta1(){
  alert("Por favor, contate um administrador");
}
}
