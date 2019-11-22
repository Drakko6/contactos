import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";



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


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }


  addContact(){

    console.log('addMovie')

    const contacto ={
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      facebook : this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
      avatar:this.avatar

    };

    console.log(JSON.stringify(contacto));

    this.http.post('contactos/contactos/', contacto)
      .subscribe(data=> {
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error))
      })

    this.navCtrl.pop()



  }

}
