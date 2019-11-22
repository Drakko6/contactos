import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  nombre ="";
  telefono = "";
  facebook= "";
  twitter="";
  instagram="";
  avatar ="";
  correo ="";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }



  addContact(){

  }

}
