import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: 'home/home.page.html',
  styleUrls: ['home/home.page.scss']


  
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
  }
