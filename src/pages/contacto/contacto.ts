import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from '@angular/fire/firestore'



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


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public alertCtrl: AlertController,
              public afs: AngularFirestore) {
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }


  addContact(){
    if(this.nombre=="" || this.telefono=="" || this.avatar==""){

      const alert = this.alertCtrl.create({
        title: '¡Oops!',
        subTitle: 'Nombre, Teléfono y Avatar necesarios',
        buttons: ['OK']
      });
      alert.present();

    }
    else {
      this.afs.collection('contacto').add({
        nombre: this.nombre, telefono: this.telefono, correo: this.correo,
        facebook: this.facebook, twitter: this.twitter, instagram: this.instagram, avatar: this.avatar
      }).then(newItem => {
        console.log('Nuevo contacto:'+'ID:'+newItem.id );
      }).catch(err => {
        console.error(err);
      })

      this.navCtrl.pop()
    }




  }

}
