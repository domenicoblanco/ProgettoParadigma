function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tweets-tweets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tweets/tweets.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tweets/tweets.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTweetsTweetsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class='background-header'>\n    <ion-title class='title'>Tweets</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='box-content'>\n  <div class='container'>\n    <ion-list class='list-post' *ngFor=\"let tweet of tweets\">\n        <ion-item class='box-item'>\n          <ion-label>  \n            <div class='item-header'>\n              <ion-img class='profile-image' [src]='\"./assets/users/me.png\"'></ion-img>\n              <div style='margin: 0 10px'>\n                <p *ngIf=\"tweet._author; else userDeleted\" class=\"user\" [class.me]=\"canEdit(tweet)\">\n                  {{ getAuthor(tweet) }} \n                  <ion-icon *ngIf=\"canEdit(tweet)\" name=\"heart\" color=\"danger-tint\"></ion-icon> \n                </p>\n                <ng-template #userDeleted> \n                  <p class=\"user-deleted\">User deleted</p>\n                </ng-template>\n\n                <ion-note>{{ tweet.created_at | unictDate: 1 }}</ion-note>  \n              </div>\n              <div class='editOrDeletePost'>\n                <ion-buttons *ngIf='canEdit(tweet)'>\n                  <ion-button color=\"secondary\" (click)=\"createOrEditTweet(tweet)\">\n                    <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"danger\" (click)=\"deleteTweet(tweet)\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>  \n                  </ion-button>\n                </ion-buttons>\n              </div>\n            </div>\n            <h2>{{tweet.tweet}}</h2>\n            <div class='box-image'>\n              <ion-img src=\"./assets/icon/favicon.png\"></ion-img>\n            </div>\n\n           <!--  da sistemare completamente (creare anche un metodo per il cambio del valore booleano e la comunicazione con il backend)\n            <ion-button color='tweet.like ? danger : white' (click)='!tweet.like'>\n              <ion-icon slot=\"icon-only\" name='heart'></ion-icon>\n            </ion-button> -->\n          </ion-label> \n        </ion-item>\n    </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"> \n    <ion-fab-button (click)=\"createOrEditTweet()\">\n      <ion-icon name=\"add\"></ion-icon>  \n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tweets/tweets-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/tweets/tweets-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: TweetsPageRoutingModule */

  /***/
  function srcAppPagesTweetsTweetsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TweetsPageRoutingModule", function () {
      return TweetsPageRoutingModule;
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


    var _tweets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tweets.page */
    "./src/app/pages/tweets/tweets.page.ts");

    var routes = [{
      path: '',
      component: _tweets_page__WEBPACK_IMPORTED_MODULE_3__["TweetsPage"]
    }];

    var TweetsPageRoutingModule = function TweetsPageRoutingModule() {
      _classCallCheck(this, TweetsPageRoutingModule);
    };

    TweetsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TweetsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tweets/tweets.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/tweets/tweets.module.ts ***!
    \***********************************************/

  /*! exports provided: TweetsPageModule */

  /***/
  function srcAppPagesTweetsTweetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TweetsPageModule", function () {
      return TweetsPageModule;
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


    var _tweets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tweets-routing.module */
    "./src/app/pages/tweets/tweets-routing.module.ts");
    /* harmony import */


    var _tweets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tweets.page */
    "./src/app/pages/tweets/tweets.page.ts");
    /* harmony import */


    var src_app_pipes_unict_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/unict-date.pipe */
    "./src/app/pipes/unict-date.pipe.ts");

    var TweetsPageModule = function TweetsPageModule() {
      _classCallCheck(this, TweetsPageModule);
    };

    TweetsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tweets_routing_module__WEBPACK_IMPORTED_MODULE_5__["TweetsPageRoutingModule"]],
      declarations: [_tweets_page__WEBPACK_IMPORTED_MODULE_6__["TweetsPage"], src_app_pipes_unict_date_pipe__WEBPACK_IMPORTED_MODULE_7__["UnictDatePipe"]]
    })], TweetsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tweets/tweets.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/tweets/tweets.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTweetsTweetsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-deleted {\n  color: var(--ion-color-light-shade);\n}\n\n.user {\n  color: var(--ion-color-secondary);\n}\n\n.me {\n  font-weight: bold;\n  color: var(--ion-color-danger-tint);\n}\n\n.box-image {\n  width: 100%;\n  margin: 15px 0;\n}\n\n.box-content {\n  --ion-background-color: lightgray;\n}\n\n.container {\n  width: 100%;\n  margin-top: 15px;\n}\n\n@media only screen and (min-width: 768px) {\n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .list-post {\n    width: 450px;\n  }\n\n  .box-item {\n    border-radius: 8px;\n  }\n}\n\n.box-item {\n  --ion-background-color: white;\n}\n\n[name=heart] {\n  vertical-align: middle;\n}\n\n.profile-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.item-header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.editOrDeletePost {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHdlZXRzL0c6XFxVbmljdFxcTUFURVJJRSBURVJaTyBBTk5PXFxTZW1pbmFyaW8gcGVyIHRpcm9jaW5pb1xcUHJvZ2V0dG9cXFByb2dldHRvUGFyYWRpZ21hXFxJb25pYy9zcmNcXGFwcFxccGFnZXNcXHR3ZWV0c1xcdHdlZXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHdlZXRzL3R3ZWV0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDQ047O0VEQ0U7SUFDSSxZQUFBO0VDRU47O0VEQUU7SUFDSSxrQkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSSw2QkFBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHdlZXRzL3R3ZWV0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kZWxldGVkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnVzZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLm1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcbn1cblxuLmJveC1pbWFnZXtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5ib3gtY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIH1cbiAgICAubGlzdC1wb3N0IHtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgIH1cbiAgICAuYm94LWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxufVxuXG4uYm94LWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5bbmFtZT1oZWFydF0ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaXRlbS1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWRpdE9yRGVsZXRlUG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiLnVzZXItZGVsZXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG4udXNlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLm1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xufVxuXG4uYm94LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uYm94LWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5saXN0LXBvc3Qge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuXG4gIC5ib3gtaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG4uYm94LWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuW25hbWU9aGVhcnRdIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pdGVtLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWRpdE9yRGVsZXRlUG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tweets/tweets.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/tweets/tweets.page.ts ***!
    \*********************************************/

  /*! exports provided: TweetsPage */

  /***/
  function srcAppPagesTweetsTweetsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TweetsPage", function () {
      return TweetsPage;
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


    var src_app_services_tweets_tweets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tweets/tweets.service */
    "./src/app/services/tweets/tweets.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_tweet_new_tweet_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../new-tweet/new-tweet.page */
    "./src/app/pages/new-tweet/new-tweet.page.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/uniLoader.service */
    "./src/app/shared/uniLoader.service.ts");
    /* harmony import */


    var src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/toast.service */
    "./src/app/shared/toast.service.ts");
    /* harmony import */


    var src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/enums/toast-types.enum */
    "./src/app/enums/toast-types.enum.ts");

    var TweetsPage = /*#__PURE__*/function () {
      function TweetsPage(tweetsService, modalCtrl, auth, uniLoader, toastService) {
        _classCallCheck(this, TweetsPage);

        this.tweetsService = tweetsService;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.uniLoader = uniLoader;
        this.toastService = toastService;
        this.tweets = [];
      }

      _createClass(TweetsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getTweets();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getTweets",
        value: function getTweets() {
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
                    return this.tweetsService.getTweets();

                  case 5:
                    this.tweets = _context2.sent;
                    _context2.next = 8;
                    return this.uniLoader.dismiss();

                  case 8:
                    _context2.next = 14;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](0);
                    _context2.next = 14;
                    return this.toastService.show({
                      message: _context2.t0.message,
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_8__["ToastTypes"].ERROR
                    });

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 10]]);
          }));
        }
      }, {
        key: "createOrEditTweet",
        value: function createOrEditTweet(tweet) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _new_tweet_new_tweet_page__WEBPACK_IMPORTED_MODULE_4__["NewTweetPage"],
                      componentProps: {
                        tweet: tweet
                      } // Passo il parametro tweet. Se non disponibile, rimane undefined.

                    });

                  case 2:
                    modal = _context4.sent;

                    /*
                        Quando l'utente chiude la modal ( modal.onDidDismiss() ),
                        aggiorno il mio array di tweets
                    */
                    modal.onDidDismiss().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.getTweets();

                              case 2:
                                _context3.next = 4;
                                return this.uniLoader.dismiss();

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }); // Visualizzo la modal

                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteTweet",
        value: function deleteTweet(tweet) {
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
                    return this.tweetsService.deleteTweet(tweet._id);

                  case 5:
                    _context5.next = 7;
                    return this.getTweets();

                  case 7:
                    _context5.next = 9;
                    return this.toastService.show({
                      message: 'Your tweet was deleted successfully!',
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_8__["ToastTypes"].SUCCESS
                    });

                  case 9:
                    _context5.next = 15;
                    break;

                  case 11:
                    _context5.prev = 11;
                    _context5.t0 = _context5["catch"](0);
                    _context5.next = 15;
                    return this.toastService.show({
                      message: _context5.t0.message,
                      type: src_app_enums_toast_types_enum__WEBPACK_IMPORTED_MODULE_8__["ToastTypes"].ERROR
                    });

                  case 15:
                    _context5.next = 17;
                    return this.uniLoader.dismiss();

                  case 17:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 11]]);
          }));
        }
      }, {
        key: "canEdit",
        value: function canEdit(tweet) {
          // Controllo che l'autore del tweet coincida col mio utente
          if (tweet._author) {
            return tweet._author._id === this.auth.me._id;
          }

          return false;
        } // Metodo bindato con l'interfaccia in Angular

      }, {
        key: "getAuthor",
        value: function getAuthor(tweet) {
          if (this.canEdit(tweet)) {
            return 'You';
          } else {
            return tweet._author.name + ' ' + tweet._author.surname;
          }
        }
      }]);

      return TweetsPage;
    }();

    TweetsPage.ctorParameters = function () {
      return [{
        type: src_app_services_tweets_tweets_service__WEBPACK_IMPORTED_MODULE_2__["TweetsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"]
      }, {
        type: src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }];
    };

    TweetsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tweets',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tweets.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tweets/tweets.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tweets.page.scss */
      "./src/app/pages/tweets/tweets.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_tweets_tweets_service__WEBPACK_IMPORTED_MODULE_2__["TweetsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_shared_uniLoader_service__WEBPACK_IMPORTED_MODULE_6__["UniLoaderService"], src_app_shared_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])], TweetsPage);
    /***/
  }
}]);
//# sourceMappingURL=tweets-tweets-module-es5.js.map