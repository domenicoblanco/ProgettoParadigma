function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class='title'>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n\n  <div class=\"avatar__container\" (click)='loadImage()'>\n    <img class=\"profile-img\" [src]='this.me.image? this.me.image : \"./assets/users/me.png\"'>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Name</ion-label>\n    <ion-input [(ngModel)]=\"me.name\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Surname</ion-label>\n    <ion-input [(ngModel)]=\"me.surname\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"me.email\" [readonly]=\"readOnly\"></ion-input>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"solid\" color=\"secondary\" (click)=\"editAndSave()\">\n          <ion-icon [name]=\"readOnly ? 'create' : 'checkmark'\"></ion-icon> \n          {{ readOnly ? 'Edit' : 'Save' }} profile\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"deleteMe()\">\n          <ion-icon name=\"close-circle\"></ion-icon> \n          Delete profile\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons class=\"button-logout\">\n      <ion-button fill='solid' color=\"primary\" (click)=\"logout()\">Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar__container {\n  width: 100%;\n  height: 175px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-light);\n  margin-bottom: 25px;\n}\n.avatar__container .profile-img {\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n}\n.button-logout {\n  display: flex;\n  justify-content: center;\n}\n.button-logout ion-button {\n  --border-radius: 8px;\n  width: 250px;\n  height: 40px;\n}\n@media only screen and (min-width: 768px) {\n  ion-item {\n    font-size: 22px;\n  }\n\n  ion-button {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  ion-item {\n    font-size: 20px;\n  }\n\n  ion-button {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9HOlxcVW5pY3RcXE1BVEVSSUUgVEVSWk8gQU5OT1xcU2VtaW5hcmlvIHBlciB0aXJvY2luaW9cXFByb2dldHRvXFxQcm9nZXR0b1BhcmFkaWdtYVxcSW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURBSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFUjtBREVBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0VDRU47QUFDRjtBRENBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAucHJvZmlsZS1pbWcge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5cbi5idXR0b24tbG9nb3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufSIsIi5hdmF0YXJfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hdmF0YXJfX2NvbnRhaW5lciAucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ1dHRvbi1sb2dvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idXR0b24tbG9nb3V0IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/users/users.service */
    "./src/app/services/users/users.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/uniLoader.service */
    "./src/app/shared/uniLoader.service.ts");
    /* harmony import */


    var src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/toast.service */
    "./src/app/shared/toast.service.ts");
    /* harmony import */


    var src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/enums/toast-types.enum */
    "./src/app/enums/toast-types.enum.ts");
    /* harmony import */


    var src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/uniAlert.service */
    "./src/app/shared/uniAlert.service.ts");
    /* harmony import */


    var src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/loadImage.service */
    "./src/app/shared/loadImage.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(auth, usersService, navCtrl, uniLoader, toastService, uniAlert, tweetImage) {
        _classCallCheck(this, ProfilePage);

        this.auth = auth;
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.uniLoader = uniLoader;
        this.toastService = toastService;
        this.uniAlert = uniAlert;
        this.tweetImage = tweetImage;
        this.readOnly = true;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.me = this.auth.me;
        } // da sistemare e assegnare l'immagine all'utente e non al tweet

      }, {
        key: "loadImage",
        value: function loadImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.tweetImage.getPhoto().then(function (res) {
                      _this.me.image = res;
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "editAndSave",
        value: function editAndSave() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.readOnly) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.prev = 1;
                    _context2.next = 4;
                    return this.uniLoader.show();

                  case 4:
                    _context2.next = 6;
                    return this.usersService.editUser(this.me);

                  case 6:
                    _context2.next = 8;
                    return this.uniLoader.dismiss();

                  case 8:
                    _context2.next = 10;
                    return this.toastService.show({
                      message: 'Your account edits are now safe and sound!',
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].SUCCESS
                    });

                  case 10:
                    _context2.next = 18;
                    break;

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](1);
                    _context2.next = 16;
                    return this.uniLoader.dismiss();

                  case 16:
                    _context2.next = 18;
                    return this.toastService.show({
                      message: _context2.t0.message,
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].ERROR
                    });

                  case 18:
                    // Altrimenti, cambio lo stato della mia variabile - per rendere i campi editabili o meno
                    this.readOnly = !this.readOnly;

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 12]]);
          }));
        }
      }, {
        key: "deleteMe",
        value: function deleteMe() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var alertButtons;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // Creo testo e callbacks per i bottoni del mio loader
                    alertButtons = [{
                      text: 'Cancel',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler() {}
                    }, {
                      text: 'OK',
                      handler: function handler() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  this.confirmedDeletedUser();

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }
                    }]; // Mostro il loader per chiedere all'utente conferma

                    _context4.next = 3;
                    return this.uniAlert.show({
                      header: 'Head up!',
                      subHeader: 'You are about to delete your own account.',
                      message: 'Do you confirm you want to proceed with this action?',
                      buttons: alertButtons
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "confirmedDeletedUser",
        value: function confirmedDeletedUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.uniLoader.show();

                  case 3:
                    _context5.next = 5;
                    return this.usersService.deleteUser(this.me._id);

                  case 5:
                    _context5.next = 7;
                    return this.logout();

                  case 7:
                    _context5.next = 13;
                    break;

                  case 9:
                    _context5.prev = 9;
                    _context5.t0 = _context5["catch"](0);
                    _context5.next = 13;
                    return this.toastService.show({
                      message: _context5.t0.message,
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_7__["ToastTypes"].ERROR
                    });

                  case 13:
                    _context5.next = 15;
                    return this.uniLoader.dismiss();

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 9]]);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // Cancello il mio utente in sessione, settando il mio oggetto a oggetto vuoto
                    this.auth.me = {}; // Cancello il token in sessione settandolo come undefined

                    this.auth.userToken = undefined; // Navigo l'utente nella schermata Login

                    _context6.next = 4;
                    return this.navCtrl.navigateRoot('/login');

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__["UniLoaderService"]
      }, {
        type: src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__["UniAlertService"]
      }, {
        type: src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__["LoadImageService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_5__["UniLoaderService"], src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], src_app_shared_uniAlert_service__WEBPACK_IMPORTED_MODULE_8__["UniAlertService"], src_app_shared_loadImage_service__WEBPACK_IMPORTED_MODULE_9__["LoadImageService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map