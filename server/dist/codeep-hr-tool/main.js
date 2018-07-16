(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/authentication.service */ "./src/services/authentication.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/guards/auth.guard.ts");






var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'confirm', component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/confirm/confirm.component.css":
/*!***********************************************!*\
  !*** ./src/app/confirm/confirm.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-4 {\r\n    font-size: 2.5rem;\r\n}\r\n.form-control:focus {\r\n    border-color: #28A745;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #28A745;\r\n}"

/***/ }),

/***/ "./src/app/confirm/confirm.component.html":
/*!************************************************!*\
  !*** ./src/app/confirm/confirm.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5 text-success display-4\">Verify account</h1>\n<div class=\"pt-3\">\n    <div class=\"row justify-content-sm-center\">\n        <div class=\"col-sm-10 col-md-12\">\n            <div class=\"card border-0\">\n                <div class=\"card-header text-success\">Enter the verification code from your email</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 pt-3  m-auto\">\n                            <form class=\"form-submit \">\n                                <input type=\"text\" name=\"code\" class=\"form-control mb-3\" placeholder=\"Enter code\" [(ngModel)]=\"code\" required autofocus>\n                                <p *ngIf=\"loading\" class=\"text-danger\">Wrong verification code</p>\n                                <button class=\"btn btn-lg btn-outline-success btn-block mb-1\" type=\"submit\" (click)=\"confirmCode()\">Submit\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"pt-3\">\n    <div class=\"row justify-content-sm-center\">\n        <div class=\"col-sm-10 col-md-12\">\n            <div class=\"card border-0\">\n                <div class=\"card-header text-success\">Resend the verification code</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 pt-3 m-auto\">\n                            <form class=\"form-resend\">\n                                <button class=\"btn btn-lg btn-outline-success btn-block mb-1\" type=\"submit\"  (click)=\"refreshCode()\">Resend\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(userService, route, router) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['data'];
        });
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.refreshCode = function () {
        this.userService.updateCode({ id: this.id }).subscribe(function (res) {
            console.log(res, "res");
        });
    };
    ConfirmComponent.prototype.confirmCode = function () {
        var _this = this;
        this.userService.confirm({ confirmCode: this.code, id: this.id }).subscribe(function (res) {
            _this.data = res;
            if (_this.data.status === "active") {
                _this.router.navigate(['/home']);
            }
        }, function (error) { return _this.loading = true; });
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5 text-success display-4\">Coming Soon</h1>\r\n<div class=\"container pt-3\">\r\n\r\n</div>\r\n<hr>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control:focus {\r\n    border-color: #28A745;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #28A745;\r\n}\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\r\n    background-color: #28A745;;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5 text-success display-4\">Codeep Hr Tool</h1>\n<div class=\"pt-3\">\n    <div class=\"row justify-content-sm-center\">\n        <div class=\"col-sm-10 col-md-12\">\n            <div class=\"card border-0\">\n                <div class=\"card-header text-success\">Sign in to continue</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 text-center align-self-center\">\n                            <img class=\"img-fluid\" src=\"../../assets/images/logo.png\">\n                        </div>\n                        <div class=\"col-md-4 pt-4\">\n                            <form class=\"form-signin\" [formGroup]=\"loginForm\">\n                                <div class=\"form-group\">\n                                    <p class=\"text-danger\"  *ngIf=\"loading\">Wrong password or email</p>\n                                    <p class=\"text-danger\"  *ngIf=\"loading_1\">Wrong password</p>\n                                    <input type=\"text\" class=\"form-control mb-3\" formControlName=\"email\"\n                                           placeholder=\"Email\" required autofocus>\n                                    <div *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                                        <p  class=\"text-danger\" *ngIf=\"!!email.errors.required\">Email is\n                                            required</p>\n                                        <p class=\"text-danger\" *ngIf=\"!!email.errors.pattern\">For example:\n                                            \"you@email.com\"</p>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control mb-3\" formControlName=\"password\"\n                                           placeholder=\"Password\" required>\n                                    <div *ngIf=\"password.errors && (password.dirty || password.touched)\">\n                                        <p class=\"text-danger\" *ngIf=\"!!password.errors.required\">Password is\n                                            required</p>\n                                        <p class=\"text-danger\" *ngIf=\"!!password.errors.pattern\">Password must be at\n                                            least 6 characters and include a number</p>\n                                    </div>\n                                </div>\n                                <button class=\"btn btn-lg btn-outline-success btn-block mb-1\" type=\"submit\"\n                                        [disabled]=\"loginForm.invalid\" (click)=\"userLogin()\">Sign in\n                                </button>\n                                <div class=\"custom-control custom-checkbox text-success \">\n                                    <input type=\"checkbox\" class=\"custom-control-input \" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <a routerLink=\"/register\" class=\"float-right text-success\">Create an account </a>\n        </div>\n    </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.loading = false;
        this.loading_1 = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    LoginComponent.prototype.createFormControls = function () {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)
        ]);
    };
    ;
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: this.email,
            password: this.password
        });
    };
    ;
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.loginForm.value).subscribe(function (res) {
            _this.data = res;
            if (_this.data.status === 'confirm') {
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            if (error.error.errors === 'wrong password or email') {
                _this.loading = true;
                setTimeout(function () {
                    _this.loading = false;
                }, 2000);
            }
            if (error.error.errors === 'wrong password') {
                _this.loading_1 = true;
                setTimeout(function () {
                    _this.loading_1 = false;
                }, 2000);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

//|| error.error === 'wrong password'


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control:focus {\r\n    border-color: #28A745;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #28A745;\r\n}\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5 text-success display-4\">Registration Form</h1>\n<div class=\"pt-3\">\n    <div class=\"row justify-content-sm-center\">\n        <div class=\"col-sm-10 col-md-12\">\n            <div class=\"card border-0\">\n                <div class=\"card-header text-success\">Register to continue</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 text-center align-self-center\">\n                            <img class=\"img-fluid\" src=\"../../assets/images/logo.png\">\n                        </div>\n                        <div class=\"col-md-4 pt-3\">\n                            <form [formGroup]=\"registerForm\" class=\"form-horizontal\">\n                                    <div class=\"form-group\">\n                                        <input placeholder=\"First Name\" type=\"text\"\n                                               formControlName=\"firstName\"\n                                               required class=\"form-control mb-3\" autofocus>\n                                        <div\n                                             *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n                                            <p class=\"text-danger\" *ngIf=\"!!firstName.errors.required\">First Name is\n                                                required</p>\n                                        </div>\n                                    </div>\n\n                                <div class=\"form-group\">\n                                    <input placeholder=\"Last Name\" type=\"text\"\n                                           formControlName=\"lastName\"\n                                           required class=\"form-control mb-3\">\n                                    <div *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n                                        <p class=\"text-danger\" *ngIf=\"!!lastName.errors.required\">Last Name is\n                                            required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control mb-3\" formControlName=\"email\"\n                                           placeholder=\"Email\" required>\n                                    <div *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                                        <p class=\"text-danger\" *ngIf=\"!!email.errors.required\">Email is\n                                            required</p>\n                                        <p class=\"text-danger\" *ngIf=\"!!email.errors.pattern\">For example: \"you@email.com\"</p>\n                                    </div>\n                                    <p class=\"text-danger\" *ngIf=\"loading\">Email is already taken</p>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control mb-3\" formControlName=\"password\"\n                                           placeholder=\"Password\" required>\n                                    <div *ngIf=\"password.errors && (password.dirty || password.touched)\">\n                                        <p class=\"text-danger\" *ngIf=\"!!password.errors.required\">Password is\n                                            required</p>\n                                        <p class=\"text-danger\" *ngIf=\"!!password.errors.pattern\">Password must be at least 6 characters and include a number</p>\n                                    </div>\n                                </div>\n\n                                <button class=\"btn btn-lg btn-outline-success btn-block mb-1\" type=\"submit\" (click)=\"registerUser()\" [disabled]=\"registerForm.invalid\">Register\n                                    </button>\n                            </form>\n                            <!--<form [formGroup]=\"registerForm\" class=\"form-register\">-->\n                            <!--<div class=\"form-group\">-->\n                            <!--<input type=\"text\" class=\"form-control mb-3\" formControlName=\"firstName\"-->\n                            <!--[ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"-->\n                            <!--placeholder=\"First Name\" autofocus>-->\n                            <!--<div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">-->\n                            <!--<div *ngIf=\"f.firstName.errors.required\">First Name is required</div>-->\n                            <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"form-group\">-->\n                            <!--<input type=\"text\" class=\"form-control mb-3\" formControlName=\"lastName\"-->\n                            <!--[ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"-->\n                            <!--placeholder=\"Last Name\">-->\n                            <!--<div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">-->\n                            <!--<div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>-->\n                            <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"form-group\">-->\n                            <!--<input type=\"text\" class=\"form-control mb-3\" formControlName=\"email\"-->\n                            <!--[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"-->\n                            <!--placeholder=\"Email\">-->\n                            <!--<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">-->\n                            <!--<div *ngIf=\"f.email.errors.required\">Email is required</div>-->\n                            <!--</div>-->\n                            <!--</div>-->\n                            <!--<div class=\"form-group\">-->\n                            <!--<input type=\"text\" class=\"form-control mb-3\" formControlName=\"password\"-->\n                            <!--[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"-->\n                            <!--placeholder=\"password\">-->\n                            <!--<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">-->\n                            <!--<div *ngIf=\"f.password.errors.required\">Password is required</div>-->\n                            <!--<div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>-->\n                            <!--</div>-->\n                            <!--</div>-->\n                            <!--<button class=\"btn btn-lg btn-outline-success btn-block mb-1\" type=\"submit\" (click)=\"registerUser()\">Register-->\n                            <!--</button>-->\n                            <!--</form>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    RegisterComponent.prototype.createFormControls = function () {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)
        ]);
    };
    ;
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });
    };
    ;
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            var navigationExtras = {
                queryParams: {
                    'data': res['id'],
                }
            };
            _this.router.navigate(['/confirm'], navigationExtras);
        }, function (error) {
            error.error.errors.forEach(function (state) {
                if (state.msg === 'E-mail already in use') {
                    _this.loading = true;
                    setTimeout(function () {
                        _this.loading = false;
                    }, 2000);
                }
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: {
        apiUrl: 'http://localhost:3000',
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/guards/auth.guard.ts":
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.cookieService.get('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/authentication.service.ts":
/*!************************************************!*\
  !*** ./src/services/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.apiUrl + "/api/users/login", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this.cookieValue = user;
            if (user) {
                _this.cookieService.set('currentUser', JSON.stringify(_this.cookieValue.id));
                // localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from Cookies to log user out
        this.cookieService.delete('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.apiUrl + "/api/users/registration", user);
    };
    UserService.prototype.updateCode = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.apiUrl + "/api/users/verification", user);
    };
    UserService.prototype.confirm = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.apiUrl + "/api/users/confirm", user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vahan\Desktop\codeep-hr-tool\codeep-hr-tool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map