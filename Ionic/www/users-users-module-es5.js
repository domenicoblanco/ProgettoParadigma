function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class='title'>Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n\n  <ion-list>\n\n    <ion-item *ngFor=\"let user of users; let i = index\" [color]=\"getItemColor(user)\">\n\n      <ion-avatar class=\"user-avatar\">\n        <img [src]=\"'./assets/users/' + usersPics[i] + '.svg'\">\n      </ion-avatar>\n      \n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"primary\">\n          <h3>{{ user.name }} {{ user.surname }}</h3>\n        </ion-text>\n        <p>{{ user.email }}</p>\n      </ion-label>\n    \n    </ion-item>\n\n  </ion-list> \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/users/users-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/users/users-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: UsersPageRoutingModule */

  /***/
  function srcAppPagesUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
      return UsersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/pages/users/users.page.ts");

    var routes = [{
      path: '',
      component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }];

    var UsersPageRoutingModule = function UsersPageRoutingModule() {
      _classCallCheck(this, UsersPageRoutingModule);
    };

    UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/users/users.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/users/users.module.ts ***!
    \*********************************************/

  /*! exports provided: UsersPageModule */

  /***/
  function srcAppPagesUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
      return UsersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/pages/users/users-routing.module.ts");
    /* harmony import */


    var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/pages/users/users.page.ts");

    var UsersPageModule = function UsersPageModule() {
      _classCallCheck(this, UsersPageModule);
    };

    UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]],
      declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })], UsersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/users/users.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/users/users.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersUsersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-avatar {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvRzpcXFVuaWN0XFxNQVRFUklFIFRFUlpPIEFOTk9cXFNlbWluYXJpbyBwZXIgdGlyb2NpbmlvXFxQcm9nZXR0b1xcUHJvZ2V0dG9QYXJhZGlnbWFcXElvbmljL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWF2YXRhciB7IFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXG59IiwiLnVzZXItYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/users/users.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/users/users.page.ts ***!
    \*******************************************/

  /*! exports provided: UsersPage */

  /***/
  function srcAppPagesUsersUsersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
      return UsersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/users/users.service */
    "./src/app/services/users/users.service.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/toast.service */
    "./src/app/shared/toast.service.ts");
    /* harmony import */


    var src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/enums/toast-types.enum */
    "./src/app/enums/toast-types.enum.ts");
    /* harmony import */


    var src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/uniLoader.service */
    "./src/app/shared/uniLoader.service.ts");

    var UsersPage = /*#__PURE__*/function () {
      function UsersPage(usersService, auth, toastService, uniLoader) {
        _classCallCheck(this, UsersPage);

        this.usersService = usersService;
        this.auth = auth;
        this.toastService = toastService;
        this.uniLoader = uniLoader;
        this.users = [];
        this.usersPics = [];
        this.userPicsAvailable = 15;
      }

      _createClass(UsersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getUsers();

                  case 2:
                    // Invoco questa funzione per avere un pool di immagini da utilizzare per la lista utenti
                    this.initUserPicts();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.uniLoader.show();

                  case 3:
                    _context2.next = 5;
                    return this.usersService.getUsers();

                  case 5:
                    this.users = _context2.sent;
                    _context2.next = 12;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](0);
                    _context2.next = 12;
                    return this.toastService.show({
                      message: _context2.t0.message,
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__["ToastTypes"].ERROR
                    });

                  case 12:
                    _context2.next = 14;
                    return this.uniLoader.dismiss();

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 8]]);
          }));
        } // Metodo bindato con l'interfaccia in Angular, per cambiare il colore di un item quando l'utente coincide con l'account connesso

      }, {
        key: "getItemColor",
        value: function getItemColor(user) {
          if (user._id === this.auth.me._id) {
            return 'light';
          }

          return null;
        }
      }, {
        key: "initUserPicts",
        value: function initUserPicts() {
          var _this = this;

          // Popolo l'array userPics con numeri random
          this.users.forEach(function (_) {
            _this.usersPics.push(Math.ceil(Math.random() * _this.userPicsAvailable));
          });
        }
      }]);

      return UsersPage;
    }();

    UsersPage.ctorParameters = function () {
      return [{
        type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"]
      }];
    };

    UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users.page.scss */
      "./src/app/pages/users/users.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"]])], UsersPage);
    /***/
  }
}]);
//# sourceMappingURL=users-users-module-es5.js.map