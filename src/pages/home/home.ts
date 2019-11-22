import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  contactoPage = ContactoPage;

  clickAdd(){

    this.navCtrl.push(this.contactoPage)

  }

  contactos = [{

    nombre : "Tonatiuh",
    telefono : "331301802",
    facebook :"@TonatiuhTamayo",
    twitter: "@TonatiuhTamayo",
    instagram: "@TonatiuhTamayo",
    avatar :"https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2018/03/07/what-homer-simpson-taught-us-about-doughnuts_3k8v.jpg?itok=YbaozsGF"

  },

    {
      nombre : "Juan",
      telefono : "331301802",
      facebook :"@TonatiuhTamayo",
      twitter: "@TonatiuhTamayo",
      instagram: "@TonatiuhTamayo",
      avatar :"https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2018/03/07/what-homer-simpson-taught-us-about-doughnuts_3k8v.jpg?itok=YbaozsGF"
    }

  ]


}
