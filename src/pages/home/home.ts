import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  contactoPage = ContactoPage;
  detallePage = DetallePage;

  clickAdd(){

    this.navCtrl.push(this.contactoPage)
  }



  clickDetalle(nombre, telefono,
    correo, facebook, instagram, twitter, avatar){
    this.navCtrl.push(this.detallePage, {nombre:nombre, telefono:telefono, correo:correo, facebook:facebook, instagram:instagram, twitter:twitter, avatar:avatar})

  }

  contactos = [{

    nombre : "Tonatiuh",
    telefono : "331301802",
    facebook :"@TonatiuhTamayo",
    twitter: "@TonatiuhTamayo",
    instagram: "@TonatiuhTamayo",
    correo: "dragontona@gmail.com",
    avatar :"https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2018/03/07/what-homer-simpson-taught-us-about-doughnuts_3k8v.jpg?itok=YbaozsGF"

  },

    {
      nombre : "Juan",
      telefono : "331301802",
      facebook :"@TonatiuhTamayo",
      twitter: "@TonatiuhTamayo",
      instagram: "@TonatiuhTamayo",
      correo: "gg@gmail.com",
      avatar :"https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2018/03/07/what-homer-simpson-taught-us-about-doughnuts_3k8v.jpg?itok=YbaozsGF"
    }

  ]


}
