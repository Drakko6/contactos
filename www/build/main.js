webpackJsonp([3],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacto_contacto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, afs) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.afs = afs;
        this.contactoPage = __WEBPACK_IMPORTED_MODULE_2__contacto_contacto__["a" /* ContactoPage */];
        this.detallePage = __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.contactosCollection = this.afs.collection('contacto');
        this.contactosCollection.snapshotChanges().subscribe(function (listaContactos) {
            _this.contactos = listaContactos.map(function (item) {
                return {
                    id: item.payload.doc.id,
                    nombre: item.payload.doc.data().nombre,
                    telefono: item.payload.doc.data().telefono,
                    correo: item.payload.doc.data().correo,
                    facebook: item.payload.doc.data().facebook,
                    twitter: item.payload.doc.data().twitter,
                    instagram: item.payload.doc.data().instagram,
                    avatar: item.payload.doc.data().avatar
                };
            });
        });
    };
    HomePage.prototype.clickAdd = function () {
        this.navCtrl.push(this.contactoPage);
    };
    HomePage.prototype.deleteContact = function (contacto) {
        this.afs.doc('contacto/' + contacto.id + '').delete().then(function () {
            console.log("Contacto eliminado");
        }).catch(function (err) { console.error(err); });
    };
    HomePage.prototype.clickDetalle = function (id, nombre, telefono, correo, facebook, instagram, twitter, avatar) {
        this.navCtrl.push(this.detallePage, { id: id, nombre: nombre, telefono: telefono, correo: correo, facebook: facebook, instagram: instagram, twitter: twitter, avatar: avatar });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Contactos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickAdd()">\n        <ion-icon style="color: #DD1C1A" name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #0780C3" >\n\n  <ion-list>\n  <ion-item-sliding *ngFor="let contacto of contactos">\n        <ion-item style="background-color: #F0C808" (click) ="clickDetalle(contacto.id, contacto.nombre, contacto.telefono,\n        contacto.correo, contacto.facebook, contacto.instagram, contacto.twitter, contacto.avatar)">\n        <ion-avatar item-start>\n          <img src="{{contacto.avatar}}" >\n        </ion-avatar>\n        <h2 style="font-weight: bold">{{contacto.nombre}}</h2>\n        <h2 style="color: #FFF2D6">{{contacto.telefono}}</h2>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteContact(contacto)" >\n            <ion-icon name="md-trash"></ion-icon>\n            Eliminar\n          </button>\n        </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl, navParams, http, alertCtrl, afs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.afs = afs;
        this.nombre = "";
        this.telefono = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
        this.avatar = "";
        this.correo = "";
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    ContactoPage.prototype.addContact = function () {
        if (this.nombre == "" || this.telefono == "" || this.avatar == "") {
            var alert_1 = this.alertCtrl.create({
                title: '¡Oops!',
                subTitle: 'Nombre, Teléfono y Avatar necesarios',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.afs.collection('contacto').add({
                nombre: this.nombre, telefono: this.telefono, correo: this.correo,
                facebook: this.facebook, twitter: this.twitter, instagram: this.instagram, avatar: this.avatar
            }).then(function (newItem) {
                console.log('Nuevo contacto:' + 'ID:' + newItem.id);
            }).catch(function (err) {
                console.error(err);
            });
            this.navCtrl.pop();
        }
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\contacto\contacto.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Nuevo contacto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #003559" padding>\n\n  <ion-list padding>\n    <ion-item  style="background-color: #003559; color: white">\n      <ion-label floating >Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="nombre" required></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Teléfono</ion-label>\n      <ion-input type="tel" [(ngModel)]="telefono" required></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="mail" [(ngModel)]="correo"></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Facebook</ion-label>\n      <ion-input type="text" [(ngModel)]="facebook"></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Twitter</ion-label>\n      <ion-input type="text" [(ngModel)]="twitter"></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Instagram</ion-label>\n      <ion-input type="text" [(ngModel)]="instagram"></ion-input>\n    </ion-item>\n\n    <ion-item style="background-color: #003559; color: white">\n      <ion-label floating>Avatar</ion-label>\n      <ion-input type="url" [(ngModel)]="avatar" required></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button style="background-color: #07A0C3" ion-button block  padding (click)="addContact()" >Agregar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_editar__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetallePage = /** @class */ (function () {
    function DetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.editarPage = __WEBPACK_IMPORTED_MODULE_2__editar_editar__["a" /* EditarPage */];
        this.nombre = "";
        this.telefono = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
        this.avatar = "";
        this.correo = "";
        this.id = "";
        this.id = navParams.get('id');
        this.nombre = navParams.get('nombre');
        this.correo = navParams.get('correo');
        this.telefono = navParams.get('telefono');
        this.facebook = navParams.get('facebook');
        this.twitter = navParams.get('twitter');
        this.instagram = navParams.get('instagram');
        this.avatar = navParams.get('avatar');
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.editarContacto = function () {
        this.navCtrl.push(this.editarPage, { id: this.id, nombre: this.nombre, telefono: this.telefono, correo: this.correo, facebook: this.facebook, instagram: this.instagram, twitter: this.twitter, avatar: this.avatar });
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\detalle\detalle.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{nombre}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #F0C808">\n\n  <ion-card>\n    <img [src] = avatar>\n    <ion-card-content style="background-color: #07A0C3">\n      <ion-item style="background-color: #07A0C3">\n        <ion-icon style="color: #FFF2D6" name="logo-whatsapp" item-start ></ion-icon>\n        <h2 style="color: #FFF2D6" item-center >{{telefono}}</h2>\n      </ion-item>\n\n      <ion-item style="background-color: #07A0C3">\n      <ion-icon style="color: #FFF2D6" name="mail" item-start></ion-icon>\n      <p style="color: #FFF2D6">{{correo}}</p>\n      </ion-item>\n\n      <ion-item style="background-color: #07A0C3">\n      <ion-icon style="color: #FFF2D6" name="logo-facebook" item-start></ion-icon>\n      <h2 style="color: #FFF2D6" item-center>{{facebook}}</h2>\n      </ion-item>\n\n      <ion-item style="background-color: #07A0C3">\n      <ion-icon style="color: #FFF2D6" name="logo-twitter" item-start></ion-icon>\n      <h2 style="color: #FFF2D6" item-center>{{twitter}}</h2>\n      </ion-item>\n\n      <ion-item style="background-color: #07A0C3">\n      <ion-icon style="color: #FFF2D6" name="logo-instagram" item-start></ion-icon>\n      <h2 style="color: #FFF2D6" item-center>{{instagram}}</h2>\n      </ion-item>\n\n      <button ion-button block padding color="secondary" (click)="editarContacto()" >Editar</button>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarPage = /** @class */ (function () {
    function EditarPage(navCtrl, navParams, afs, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.nombre = "";
        this.telefono = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
        this.avatar = "";
        this.correo = "";
        this.id = "";
        this.id = navParams.get('id');
        this.nombre = navParams.get('nombre');
        this.correo = navParams.get('correo');
        this.telefono = navParams.get('telefono');
        this.facebook = navParams.get('facebook');
        this.twitter = navParams.get('twitter');
        this.instagram = navParams.get('instagram');
        this.avatar = navParams.get('avatar');
    }
    EditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarPage');
    };
    EditarPage.prototype.update = function () {
        if (this.nombre == "" || this.telefono == "" || this.avatar == "") {
            var alert_1 = this.alertCtrl.create({
                title: '¡Oops!',
                subTitle: 'Nombre, Teléfono y Avatar necesarios',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
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
            this.navCtrl.pop();
            this.navCtrl.pop();
        }
    };
    EditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar',template:/*ion-inline-start:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\editar\editar.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Contacto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content style="background-color: #003559" padding>\n\n    <ion-list padding>\n      <ion-item  style="background-color: #003559; color: white">\n        <ion-label floating >Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="nombre" required></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Teléfono</ion-label>\n        <ion-input type="tel" [(ngModel)]="telefono" required></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Correo</ion-label>\n        <ion-input type="mail" [(ngModel)]="correo"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Facebook</ion-label>\n        <ion-input type="text" [(ngModel)]="facebook"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Twitter</ion-label>\n        <ion-input type="text" [(ngModel)]="twitter"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Instagram</ion-label>\n        <ion-input type="text" [(ngModel)]="instagram"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #003559; color: white">\n        <ion-label floating>Avatar</ion-label>\n        <ion-input type="url" [(ngModel)]="avatar" required></ion-input>\n      </ion-item>\n\n      <button style="background-color: #07A0C3" ion-button block   (click)="update()" >Guardar cambios</button>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\pages\editar\editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarPage);
    return EditarPage;
}());

//# sourceMappingURL=editar.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contacto/contacto.module": [
		470,
		2
	],
	"../pages/detalle/detalle.module": [
		471,
		1
	],
	"../pages/editar/editar.module": [
		472,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_firestore__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editar_editar__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyDo9r0O2i8i1SJH4EvcbWL22NuqIujG8Ys",
    authDomain: "contactos-3598d.firebaseapp.com",
    databaseURL: "https://contactos-3598d.firebaseio.com",
    projectId: "contactos-3598d",
    storageBucket: "contactos-3598d.appspot.com",
    messagingSenderId: "601875723383",
    appId: "1:601875723383:web:b0d29eed80e4be06860272"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_editar_editar__["a" /* EditarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar/editar.module#EditarPageModule', name: 'EditarPage', segment: 'editar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_editar_editar__["a" /* EditarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Tonatiuh Tamayo\ionic\contactosFirebase\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map