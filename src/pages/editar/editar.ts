import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFirestore} from "@angular/fire/firestore";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  homePage = HomePage;
  nombre ="";
  telefono = "";
  facebook= "";
  twitter="";
  instagram="";
  avatar ="";
  correo ="";
  id = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,  public afs: AngularFirestore,
              public alertCtrl: AlertController) {
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
    console.log('ionViewDidLoad EditarPage');
  }

  update() {
    if (this.nombre == "" || this.telefono == "" || this.avatar == "") {
      const alert = this.alertCtrl.create({
        title: '¡Oops!',
        subTitle: 'Nombre, Teléfono y Avatar necesarios',
        buttons: ['OK']
      });
      alert.present();
    } else {
      var referencia = this.afs.collection("contacto").doc("" + this.id);
      referencia.update({
        nombre: this.nombre,
        telefono: this.telefono,
        facebook: this.facebook,
        twitter: this.twitter,
        instagram: this.instagram,
        avatar: this.avatar,
        correo: this.correo
      })
        .then(function () {
        })
        .catch(function (error) {
          console.error(error);
        });
      this.navCtrl.pop()
      this.navCtrl.pop()




    }

  }

}
