(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class='title'>Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n\n  <ion-list>\n\n    <ion-item *ngFor=\"let user of users; let i = index\" [color]=\"getItemColor(user)\">\n\n      <ion-avatar class=\"user-avatar\">\n        <img [src]=\"'./assets/users/' + usersPics[i] + '.svg'\">\n      </ion-avatar>\n      \n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"primary\">\n          <h3>{{ user.name }} {{ user.surname }}</h3>\n        </ion-text>\n        <p>{{ user.email }}</p>\n      </ion-label>\n    \n    </ion-item>\n\n  </ion-list> \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/users/users.page.ts");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/users/users.page.ts");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/pages/users/users.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-avatar {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvRzpcXFVuaWN0XFxNQVRFUklFIFRFUlpPIEFOTk9cXFNlbWluYXJpbyBwZXIgdGlyb2NpbmlvXFxQcm9nZXR0b1xcUHJvZ2V0dG9QYXJhZGlnbWFcXElvbmljL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWF2YXRhciB7IFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXG59IiwiLnVzZXItYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/users/users.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.page.ts ***!
  \*******************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/toast.service */ "./src/app/shared/toast.service.ts");
/* harmony import */ var src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/toast-types.enum */ "./src/app/enums/toast-types.enum.ts");
/* harmony import */ var src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/uniLoader.service */ "./src/app/shared/uniLoader.service.ts");







let UsersPage = class UsersPage {
    constructor(usersService, auth, toastService, uniLoader) {
        this.usersService = usersService;
        this.auth = auth;
        this.toastService = toastService;
        this.uniLoader = uniLoader;
        this.users = [];
        this.usersPics = [];
        this.userPicsAvailable = 15;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Quando carico la pagina, riempio il mio array di Users
            yield this.getUsers();
            // Invoco questa funzione per avere un pool di immagini da utilizzare per la lista utenti
            this.initUserPicts();
        });
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Avvio il loader
                yield this.uniLoader.show();
                // Popolo il mio array di oggetti 'User' con quanto restituito dalla chiamata API
                this.users = yield this.usersService.getUsers();
            }
            catch (err) {
                // Nel caso la chiamata vada in errore, mostro l'errore in un toast
                yield this.toastService.show({
                    message: err.message,
                    type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__["ToastTypes"].ERROR
                });
            }
            // Chiudo il loader
            yield this.uniLoader.dismiss();
        });
    }
    // Metodo bindato con l'interfaccia in Angular, per cambiare il colore di un item quando l'utente coincide con l'account connesso
    getItemColor(user) {
        if (user._id === this.auth.me._id) {
            return 'light';
        }
        return null;
    }
    initUserPicts() {
        // Popolo l'array userPics con numeri random
        this.users.forEach(_ => {
            this.usersPics.push(Math.ceil(Math.random() * this.userPicsAvailable));
        });
    }
};
UsersPage.ctorParameters = () => [
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"] }
];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/users/users.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"]])
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map