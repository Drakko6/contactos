import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditarPage} from "../editar/editar";

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  editarPage = EditarPage;
  nombre ="";
  telefono = "";
  facebook= "";
  twitter="";
  instagram="";
  avatar ="";
  correo ="";
  id = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.nombre =navParams.get('nombre');
    this.correo = navParams.get('correo');
    this.telefono = navParams.get('telefono');
    this.facebook = navParams.get('facebook');
    this.twitter = navParams.get('twitter');
    this.instagram = navParams.get('instagram');
    this.avatar = navParams.get('avatar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  editarContacto(){

    this.navCtrl.push(this.editarPage, {id: this.id, nombre:this.nombre, telefono:this.telefono, correo: this.correo, facebook:this.facebook, instagram:this.instagram, twitter:this.twitter, avatar:this.avatar})

  }

}
