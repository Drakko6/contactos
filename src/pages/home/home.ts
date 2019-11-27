import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {DetallePage} from "../detalle/detalle";
import {HttpClient} from "@angular/common/http";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'

interface Contacto {
  nombre:string,
  telefono:string,
  correo:string,
  facebook:string,
  instagram:string,
  twitter:string,
  avatar:string,
  id?:string

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactosCollection: AngularFirestoreCollection<Contacto>
  contactos: Contacto[];


  constructor(public navCtrl: NavController, public http:HttpClient, public afs: AngularFirestore) {
  }

  ionViewDidEnter (){

    this.contactosCollection =this.afs.collection('contacto');
    this.contactosCollection.snapshotChanges().subscribe(listaContactos =>
    {
      this.contactos = listaContactos.map(item =>
      {
        return{
          id: item.payload.doc.id,
          nombre: item.payload.doc.data().nombre,
          telefono: item.payload.doc.data().telefono,
          correo: item.payload.doc.data().correo,
          facebook: item.payload.doc.data().facebook,
          twitter: item.payload.doc.data().twitter,
          instagram: item.payload.doc.data().instagram,
          avatar: item.payload.doc.data().avatar
        }
      })
    })


  }




  contactoPage = ContactoPage;
  detallePage = DetallePage;

  clickAdd(){

    this.navCtrl.push(this.contactoPage)
  }

  deleteContact(contacto:Contacto){
    this.afs.doc('contacto/'+contacto.id+'').delete().then( () =>
    {console.log("Contacto eliminado");
    }).catch(err => {console.error(err);})

  }



  clickDetalle(id, nombre, telefono,
    correo, facebook, instagram, twitter, avatar){
    this.navCtrl.push(this.detallePage, {id: id, nombre:nombre, telefono:telefono, correo:correo, facebook:facebook, instagram:instagram, twitter:twitter, avatar:avatar})

  }

  /*
  contactos: any;
  ionViewDidEnter(){

    this.http.get('/contactos/contactos/')
      .subscribe(data => {

        this.contactos = data;

        console.log(JSON.stringify(data));

      }, error => {console.log(JSON.stringify(error))});

  }


   */


}
