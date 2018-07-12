import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AboutPage } from '../about/about';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openAbout(){
    this.navCtrl.push('AboutPage', {
      id:10
    });
  }

  //Retira um pagina do topo
 /* popPage(){
    this.navCtrl.pop()
  }
*/

/* 
   Troca de pagina root //não empilha pagina
   setRoot(){
     this.navCtrl.setRoot(page)
   }
*/

}
