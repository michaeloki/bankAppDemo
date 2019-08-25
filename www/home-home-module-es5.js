(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{loginTitle}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"generalScreen\" padding>\n      <ion-card class=\"loginForm\">\n          <ion-card-header>\n            <ion-card-title>{{formTitle}}</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n              <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\" padding>\n                  <ion-list>\n                      <ion-item>\n                        <ion-label floating><ion-icon name=\"mail\"  item-start></ion-icon>Email</ion-label>\n                        <ion-input type=\"email\" [(ngModel)]=\"email\" id=\"email\" name=\"email\" required placeholder=\"bob@email.com\" text-lowercase aria-describedby=\"emailHelpInline\">\n                        </ion-input>\n                      </ion-item>\n              \n                      <ion-item>\n                          <ion-label floating><ion-icon name=\"key\" item-start></ion-icon>Password</ion-label>\n                          <ion-input type=\"password\"  [(ngModel)]=\"password\" name=\"password\" required placeholder=\"password\"></ion-input>\n                        </ion-item>        \n                    </ion-list>\n                 <!--\n                      <div padding>\n                      <button ion-button  color=\"primary\" block large  type=\"submit\">Login</button> \n                    </div>-->\n                  </form>\n          </ion-card-content>\n          \n            <div class=\"ion-padding\" *ngIf=\"showBtn\">\n              <ion-button expand=\"block\" (click)=\"login()\" type=\"submit\" class=\"ion-no-margin\">Login</ion-button>\n            </div>\n          \n        </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginScreen {\n  height: 100%;\n  background-image: url('bank_home_bg.jpg');\n  background-repeat: repeat-y;\n  background-size: cover;\n}\n\n.loginForm {\n  margin-top: 20vh;\n  text-align: center;\n  background: #dbe7f1;\n  color: #000000;\n  height: auto;\n}\n\n.bottom-form {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWxva2kvRGV2L0NvcmRvdmFQcm9qZWN0cy9teVNtYXJ0QmFuay9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5TY3JlZW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JhbmtfaG9tZV9iZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvZ2luRm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2RiZTdmMTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib3R0b20tZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuIiwiLmxvZ2luU2NyZWVuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iYW5rX2hvbWVfYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbkZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkYmU3ZjE7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib3R0b20tZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomePage = /** @class */ (function () {
    function HomePage(loginService, messageService, router) {
        var _this = this;
        this.loginService = loginService;
        this.messageService = messageService;
        this.router = router;
        this.loginTitle = "Digital Banking";
        this.formTitle = "Enter your details below";
        this.showBtn = false;
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            _this.message = message;
            if (message !== undefined) {
                try {
                    var responseObject = JSON.parse(message.text._body);
                    if (responseObject.registered) {
                        localStorage.setItem('tokens', JSON.stringify(responseObject));
                        _this.messageService.stopLoader();
                        _this.openDashboard(responseObject);
                    }
                    else {
                        _this.messageService.presentAlert('User is not registered', 'Oops!');
                    }
                }
                finally { }
            }
        });
    }
    HomePage.prototype.openDashboard = function (dataObject) {
        var navigationExtras = {
            state: {
                id: dataObject.localId,
                idToken: dataObject.idToken,
                refreshToken: dataObject.refreshToken,
            }
        };
        this.router.navigate(['/dashboard'], navigationExtras);
        this.messageService.clearMessage();
    };
    HomePage.prototype.validatePassword = function (password) {
        var passw = /^[A-Za-z]\w{7,14}$/;
        if (password.match(passw)) { }
    };
    HomePage.prototype.ngDoCheck = function () {
        if (this.email != undefined) {
            var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (regexp.test(this.email) && this.password == 'password') {
                this.showBtn = true;
            }
        }
    };
    HomePage.prototype.login = function () {
        this.loadingMessage = "Signing in...";
        this.messageService.Loader(this.loadingMessage);
        this.loginService.signIn(this.email.trim(), this.password.trim());
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");




//import {Subscription} from 'rxjs';

var LoginService = /** @class */ (function () {
    //private subscription: Subscription;
    function LoginService(httpClient, http, messageService) {
        this.httpClient = httpClient;
        this.http = http;
        this.messageService = messageService;
        this.API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y';
    }
    LoginService.prototype.signIn = function (email, password) {
        var _this = this;
        this.http.post("" + this.API_URL, {
            "email": email,
            "password": password,
            "returnSecureToken": true
        })
            .subscribe(function (val) {
            _this.sendMessage(val);
        }, function (response) {
            _this.sendMessage(response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    LoginService.prototype.sendMessage = function (message) {
        this.messageService.sendMessage(message);
    };
    LoginService.prototype.clearMessage = function () {
        this.messageService.clearMessage();
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map