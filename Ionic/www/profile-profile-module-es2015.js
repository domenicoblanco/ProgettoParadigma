(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class='title'>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n\n  <div class=\"avatar__container\" (click)='loadImage()'>\n    <img class=\"profile-img\" [src]='this.me.image? this.me.image : \"./assets/users/me.png\"'>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Name</ion-label>\n    <ion-input [(ngModel)]=\"me.name\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Surname</ion-label>\n    <ion-input [(ngModel)]=\"me.surname\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"me.email\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"solid\" color=\"secondary\" (click)=\"editAndSave()\">\n          <ion-icon [name]=\"readOnly ? 'create' : 'checkmark'\"></ion-icon> \n          {{ readOnly ? 'Edit' : 'Save' }} profile\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"deleteMe()\">\n          <ion-icon name=\"close-circle\"></ion-icon> \n          Delete profile\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons class=\"button-logout\">\n      <ion-button fill='solid' color=\"primary\" (click)=\"logout()\">Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar__container {\n  width: 100%;\n  height: 175px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-light);\n  margin-bottom: 25px;\n}\n.avatar__container .profile-img {\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n}\n.button-logout {\n  display: flex;\n  justify-content: center;\n}\n.button-logout ion-button {\n  --border-radius: 8px;\n  width: 250px;\n  height: 40px;\n}\n@media only screen and (min-width: 768px) {\n  ion-item {\n    font-size: 22px;\n  }\n\n  ion-button {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  ion-item {\n    font-size: 20px;\n  }\n\n  ion-button {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9HOlxcVW5pY3RcXE1BVEVSSUUgVEVSWk8gQU5OT1xcU2VtaW5hcmlvIHBlciB0aXJvY2luaW9cXFByb2dldHRvXFxQcm9nZXR0b1BhcmFkaWdtYVxcSW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURBSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFUjtBREVBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0VDRU47QUFDRjtBRENBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAucHJvZmlsZS1pbWcge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5cbi5idXR0b24tbG9nb3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufSIsIi5hdmF0YXJfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hdmF0YXJfX2NvbnRhaW5lciAucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ1dHRvbi1sb2dvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idXR0b24tbG9nb3V0IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/uniLoader.service */ "./src/app/shared/uniLoader.service.ts");
/* harmony import */ var src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast.service */ "./src/app/shared/toast.service.ts");
/* harmony import */ var src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/toast-types.enum */ "./src/app/enums/toast-types.enum.ts");
/* harmony import */ var src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/uniAlert.service */ "./src/app/shared/uniAlert.service.ts");
/* harmony import */ var src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/loadImage.service */ "./src/app/shared/loadImage.service.ts");










let ProfilePage = class ProfilePage {
    constructor(auth, usersService, navCtrl, uniLoader, toastService, uniAlert, tweetImage) {
        this.auth = auth;
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.uniLoader = uniLoader;
        this.toastService = toastService;
        this.uniAlert = uniAlert;
        this.tweetImage = tweetImage;
        this.readOnly = true;
    }
    ngOnInit() {
        this.me = this.auth.me;
    }
    // da sistemare e assegnare l'immagine all'utente e non al tweet
    loadImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.tweetImage.getPhoto().then(res => {
                this.me.image = res;
            });
            //  document.getElementsByClassName('cordova-camera-select')[0];
        });
    }
    editAndSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Se l'utente è in modalità modifica...
            if (!this.readOnly) {
                try {
                    // Avvio il loader
                    yield this.uniLoader.show();
                    // Salvo le modifiche apportate all'oggetto 'me'
                    yield this.usersService.editUser(this.me);
                    // Rimuovo il loader
                    yield this.uniLoader.dismiss();
                    // Mostro toast di conferma
                    yield this.toastService.show({
                        message: 'Your account edits are now safe and sound!',
                        type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].SUCCESS
                    });
                }
                catch (err) {
                    // Chiudo il loader
                    yield this.uniLoader.dismiss();
                    // Nel caso la chiamata vada in errore, mostro l'errore in un toast
                    yield this.toastService.show({
                        message: err.message,
                        type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].ERROR
                    });
                }
            }
            // Altrimenti, cambio lo stato della mia variabile - per rendere i campi editabili o meno
            this.readOnly = !this.readOnly;
        });
    }
    deleteMe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Creo testo e callbacks per i bottoni del mio loader
            const alertButtons = [{
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => { }
                }, {
                    text: 'OK',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.confirmedDeletedUser();
                    })
                }];
            // Mostro il loader per chiedere all'utente conferma
            yield this.uniAlert.show({
                header: 'Head up!',
                subHeader: 'You are about to delete your own account.',
                message: 'Do you confirm you want to proceed with this action?',
                buttons: alertButtons
            });
        });
    }
    confirmedDeletedUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Avvio il loader
                yield this.uniLoader.show();
                // Effettuo la chiamata per cancellare la il mio utente
                yield this.usersService.deleteUser(this.me._id);
                // Procedo con il logout
                yield this.logout();
            }
            catch (err) {
                // Nel caso la chiamata vada in errore, mostro l'errore in un toast
                yield this.toastService.show({
                    message: err.message,
                    type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].ERROR
                });
            }
            // Chiudo il loader
            yield this.uniLoader.dismiss();
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Cancello il mio utente in sessione, settando il mio oggetto a oggetto vuoto
            this.auth.me = {};
            // Cancello il token in sessione settandolo come undefined
            this.auth.userToken = undefined;
            // Navigo l'utente nella schermata Login
            yield this.navCtrl.navigateRoot('/login');
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__["UniLoaderService"] },
    { type: src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__["UniAlertService"] },
    { type: src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__["LoadImageService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__["UniLoaderService"],
        src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__["UniAlertService"],
        src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__["LoadImageService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map