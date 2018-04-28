webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_activities_activities_component__ = __webpack_require__("./src/app/components/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_gallery_gallery_component__ = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_resort_resort_component__ = __webpack_require__("./src/app/components/resort/resort.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_rooms_rooms_component__ = __webpack_require__("./src/app/components/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_notfound_notfound_component__ = __webpack_require__("./src/app/components/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























//Array of routes
var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'gallery/#resort', component: __WEBPACK_IMPORTED_MODULE_25__components_resort_resort_component__["a" /* ResortComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_23__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_18__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'gallery/#rooms', component: __WEBPACK_IMPORTED_MODULE_26__components_rooms_rooms_component__["a" /* RoomsComponent */] },
    { path: 'gallery/#activities', component: __WEBPACK_IMPORTED_MODULE_14__components_activities_activities_component__["a" /* ActivitiesComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_resort_resort_component__["a" /* ResortComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_notfound_notfound_component__["a" /* NotfoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/activities/activities.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  activities works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__("./src/app/components/activities/activities.component.html"),
            styles: [__webpack_require__("./src/app/components/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard!</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    // selectedFile: File = null;
    // constructor(private http: HttpClient) { }
    //
    function DashboardComponent(user) {
        this.user = user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,700');\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nheader {\r\n  text-align: center;\r\n  padding-top: 100px;\r\n  margin-bottom: 200px;\r\n  font: 14px/1.5 Arial, Helvetica, sans-serif;\r\n}\r\nheader h1 {\r\n  font: normal 32px/1.5 'Open Sans', sans-serif;\r\n  color: #3F71AE;\r\n  padding-bottom: 16px;\r\n}\r\nheader h2 {\r\n  color: #F05283;\r\n}\r\nheader h2 a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  border: 1px solid #F05283;\r\n  padding: 10px 15px;\r\n  border-radius: 3px;\r\n  font: bold 14px/1 'Open Sans', sans-serif;\r\n  text-transform: uppercase;\r\n}\r\nheader h2 a:hover {\r\n  background-color: #F05283;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n  color: #fff;\r\n}\r\nheader ul {\r\n  max-width: 600px;\r\n  margin: 60px auto 0;\r\n}\r\nheader ul a {\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  text-align: left;\r\n  background-color: #B9C1CA;\r\n  padding: 10px 16px;\r\n  border-radius: 2px;\r\n  opacity: 0.8;\r\n  font-size: 16px;\r\n  display: inline-block;\r\n  margin: 4px;\r\n  line-height: 1;\r\n  outline: none;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\nheader ul li a.active {\r\n  background-color: #66B650;\r\n  pointer-events: none;\r\n}\r\nheader ul li a:hover {\r\n  opacity: 1;\r\n}\r\nheader ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\nheader ul li {\r\n  display: inline-block;\r\n}\r\n/* In our demo, the footers are fixed to the bottom of the page */\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n@media (max-height:800px) {\r\n  footer {\r\n    position: static;\r\n  }\r\n  header {\r\n    padding-top: 40px;\r\n  }\r\n}\r\n.footer-distributed {\r\n  background-color: #390056;\r\n  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: left;\r\n  font: bold 16px sans-serif;\r\n  padding: 55px 50px;\r\n  margin-top: 80px;\r\n}\r\n.footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n/* Footer left */\r\n.footer-distributed .footer-left {\r\n  width: 40%;\r\n}\r\n/* The company logo */\r\n.footer-distributed h3 {\r\n  color: #ffffff;\r\n  font: normal 25px 'Draconian';\r\n  margin: 0;\r\n}\r\n/* Footer links */\r\n.footer-distributed .footer-links {\r\n  color: #ffffff;\r\n  margin: 20px 0 12px;\r\n  padding: 0;\r\n}\r\n.footer-distributed .footer-links a {\r\n  display: inline-block;\r\n  line-height: 1.8;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n.footer-distributed .footer-company-name {\r\n  color: #8f9296;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n/* Footer Center */\r\n.footer-distributed .footer-center {\r\n  width: 35%;\r\n}\r\n.footer-distributed .footer-center i {\r\n  background-color: #33383b;\r\n  color: #ffffff;\r\n  font-size: 25px;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 42px;\r\n  margin: 10px 15px;\r\n  vertical-align: middle;\r\n}\r\n.footer-distributed .footer-center i.fa-map-marker {\r\n  background-color: #0E894C;\r\n}\r\n.footer-distributed .footer-center i.fa-phone {\r\n  background-color: #0E894C;\r\n}\r\n.footer-distributed .footer-center i.fa-envelope {\r\n  font-size: 17px;\r\n  line-height: 38px;\r\n  background-color: #0E894C;\r\n}\r\n.icon-color {\r\n  background-color: #0E894C;\r\n}\r\n.footer-distributed .footer-center p {\r\n  display: inline-block;\r\n  color: #ffffff;\r\n  vertical-align: middle;\r\n  margin: 0;\r\n}\r\n.footer-distributed .footer-center p span {\r\n  display: block;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 2;\r\n}\r\n.footer-distributed .footer-center p a {\r\n  color: #5383d3;\r\n  text-decoration: none;\r\n  ;\r\n}\r\n/* Footer Right */\r\n.footer-distributed .footer-right {\r\n  width: 20%;\r\n}\r\n.footer-distributed .footer-company-about {\r\n  line-height: 20px;\r\n  color: #92999f;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n.footer-distributed .footer-company-about span {\r\n  display: block;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n.footer-distributed .footer-icons {\r\n  margin-top: 25px;\r\n}\r\n.footer-distributed .footer-icons a {\r\n  display: inline-block;\r\n  width: 35px;\r\n  height: 35px;\r\n  cursor: pointer;\r\n  background-color: #0E894C;\r\n  border-radius: 2px;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  line-height: 35px;\r\n  margin-right: 3px;\r\n  margin-bottom: 5px;\r\n}\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n@media (max-width: 880px) {\r\n  .footer-distributed {\r\n    font: bold 14px sans-serif;\r\n  }\r\n  .footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n  }\r\n  .footer-distributed .footer-center i {\r\n    margin-left: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\">\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Cookie\" rel=\"stylesheet\" type=\"text/css\">\r\n\r\n\r\n<footer class=\"footer-distributed\">\r\n\r\n\t<div class=\"footer-left\">\r\n\r\n\t\t<h3>Villa Darunea</h3>\r\n\r\n\t\t<p class=\"footer-company-name\">Ciobanu Veronica &copy; 2018</p>\r\n\t</div>\r\n\r\n\t<div class=\"footer-center\">\r\n\r\n\t\t<div>\r\n\t\t\t<i class=\"fa fa-map-marker\"></i>\r\n\t\t\t<p><span>placeholder</span> Palanca, Moldova</p>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t<p>+373 60244429</p>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t<p><a href=\"*\">mail@mail.com</a></p>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"footer-right\">\r\n\r\n\t\t<p class=\"footer-company-about\">\r\n\t\t\t<span>About the company</span> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.\r\n\t\t</p>\r\n\r\n\t\t<div class=\"footer-icons\">\r\n\r\n\t\t\t<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t<a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n\t\t\t<a href=\"#\"><i class=\"fa fa-github\"></i></a>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n</style>\n<body class=\"w3-light-grey w3-content\" style=\"max-width:1600px\">\n\n\n<!-- Overlay effect when opening sidebar on small screens -->\n<div class=\"w3-overlay w3-hide-large w3-animate-opacity\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" style=\"margin-left:300px\">\n\n  <!-- Header -->\n  <header id=\"resort\">\n    <a href=\"#\"><img src=\"http://via.placeholder.com/350x150\" style=\"width:65px;\" class=\"w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity\"></a>\n    <span class=\"w3-button w3-hide-large w3-xxlarge w3-hover-text-grey\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></span>\n    <div class=\"w3-container\">\n    <h1><b>GALLERY</b></h1>\n    </div>\n  </header>\n\n  <!-- First Photo Grid-->\n  <div class=\"w3-row-padding\">\n    <div class=\"w3-third w3-container w3-margin-bottom\">\n      <img src=\"../assets/images/thumb1.jpg\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum. </p>\n      </div>\n    </div>\n    <div class=\"w3-third w3-container w3-margin-bottom\">\n      <img src=\"../assets/images/thumb2.jpg\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum. </p>\n      </div>\n    </div>\n    <div class=\"w3-third w3-container\">\n      <img src=\"../assets/images/thumb3.jpg\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Second Photo Grid-->\n  <div class=\"w3-row-padding\">\n    <div class=\"w3-third w3-container w3-margin-bottom\">\n      <img src=\"http://via.placeholder.com/350x150\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum.</p>\n      </div>\n    </div>\n    <div class=\"w3-third w3-container w3-margin-bottom\">\n      <img src=\"http://via.placeholder.com/350x150\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum. </p>\n      </div>\n    </div>\n    <div class=\"w3-third w3-container\">\n      <img src=\"http://via.placeholder.com/350x150\" alt=\"\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <div class=\"w3-container w3-white\">\n        <p><b>Lorem Ipsum</b></p>\n        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Pagination -->\n  <div class=\"w3-center w3-padding-32\">\n    <div class=\"w3-bar\">\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">«</a>\n      <a href=\"#\" class=\"w3-bar-item w3-black w3-button\">1</a>\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">2</a>\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">3</a>\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">4</a>\n      <a href=\"#\" class=\"w3-bar-item w3-button w3-hover-black\">»</a>\n    </div>\n  </div>\n\n\n<!-- End page content -->\n</div>\n\n<script>\n// Script to open and close sidebar\nfunction w3_open() {\n    document.getElementById(\"mySidebar\").style.display = \"block\";\n    document.getElementById(\"myOverlay\").style.display = \"block\";\n}\n\nfunction w3_close() {\n    document.getElementById(\"mySidebar\").style.display = \"none\";\n    document.getElementById(\"myOverlay\").style.display = \"none\";\n}\n</script>\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* .carousel {\r\n  margin: auto;\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n.carousel-caption{\r\n     font-family: 'Roboto';\r\n }\r\n.text-center{\r\n  margin:auto;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<!-- <div class=\"container\"> -->\r\n<div class=\"main w3-light-grey\">\r\n\r\n  <!-- Header -->\r\n  <div class=\"w3-display-container w3-content\" style=\"max-width:1500px;\">\r\n    <img class=\"w3-image\" src=\"../assets/images/thumb3.jpg\" alt=\"The Hotel\" style=\"min-width:1000px\" width=\"1500\" height=\"800\">\r\n    <div class=\"w3-display-left w3-padding w3-col l6 m8\">\r\n      <div class=\"w3-container w3-red\">\r\n        <h2 style=\"font-family:'Draconian';\"><i class=\"fa fa-bed w3-margin-right\"></i>Villa Darunea</h2>\r\n      </div>\r\n      <div class=\"w3-container w3-white w3-padding-16\">\r\n        <form action=\"\" target=\"_blank\">\r\n          <div class=\"w3-row-padding\" style=\"margin:0 -16px;\">\r\n            <div class=\"w3-half w3-margin-bottom\">\r\n              <label><i class=\"fa fa-calendar-o\"></i> Check In</label>\r\n              <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"DD MM YYYY\" name=\"CheckIn\" required>\r\n            </div>\r\n            <div class=\"w3-half\">\r\n              <label><i class=\"fa fa-calendar-o\"></i> Check Out</label>\r\n              <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"DD MM YYYY\" name=\"CheckOut\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"w3-row-padding\" style=\"margin:8px -16px;\">\r\n            <div class=\"w3-half w3-margin-bottom\">\r\n              <label><i class=\"fa fa-male\"></i> Adults</label>\r\n              <input class=\"w3-input w3-border\" type=\"number\" value=\"1\" name=\"Adults\" min=\"1\" max=\"6\">\r\n            </div>\r\n            <div class=\"w3-half\">\r\n              <label><i class=\"fa fa-child\"></i> Kids</label>\r\n              <input class=\"w3-input w3-border\" type=\"number\" value=\"0\" name=\"Kids\" min=\"0\" max=\"6\">\r\n            </div>\r\n          </div>\r\n          <button class=\"w3-button w3-dark-grey\" type=\"submit\"><i class=\"fa fa-search w3-margin-right\"></i> Search availability</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Page content -->\r\n  <div class=\"w3-content\" style=\"max-width:1532px;\">\r\n\r\n    <div class=\"w3-container w3-margin-top\" id=\"rooms\">\r\n      <h3>Rooms</h3>\r\n      <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>\r\n    </div>\r\n\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col m3\">\r\n        <label><i class=\"fa fa-calendar-o\"></i> Check In</label>\r\n        <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"DD MM YYYY\">\r\n      </div>\r\n      <div class=\"w3-col m3\">\r\n        <label><i class=\"fa fa-calendar-o\"></i> Check Out</label>\r\n        <input class=\"w3-input w3-border\" type=\"text\" placeholder=\"DD MM YYYY\">\r\n      </div>\r\n      <div class=\"w3-col m2\">\r\n        <label><i class=\"fa fa-male\"></i> Adults</label>\r\n        <input class=\"w3-input w3-border\" type=\"number\" placeholder=\"1\">\r\n      </div>\r\n      <div class=\"w3-col m2\">\r\n        <label><i class=\"fa fa-child\"></i> Kids</label>\r\n        <input class=\"w3-input w3-border\" type=\"number\" placeholder=\"0\">\r\n      </div>\r\n      <div class=\"w3-col m2\">\r\n        <label><i class=\"fa fa-search\"></i> Search</label>\r\n        <button class=\"w3-button w3-block w3-black\">Search</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"w3-row-padding w3-padding-16\">\r\n      <div class=\"w3-third w3-margin-bottom\">\r\n        <img src=\"http://via.placeholder.com/350x150\" alt=\"Norway\" style=\"width:100%\">\r\n        <div class=\"w3-container w3-white\">\r\n          <h3>Single Room</h3>\r\n          <h6 class=\"w3-opacity\">From $99</h6>\r\n          <p>Single bed</p>\r\n          <p>15m<sup>2</sup></p>\r\n          <p class=\"w3-large\"><i class=\"fa fa-bath\"></i> <i class=\"fa fa-phone\"></i> <i class=\"fa fa-wifi\"></i></p>\r\n          <button class=\"w3-button w3-block w3-black w3-margin-bottom\">Choose Room</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-margin-bottom\">\r\n        <img src=\"http://via.placeholder.com/350x150\" alt=\"Norway\" style=\"width:100%\">\r\n        <div class=\"w3-container w3-white\">\r\n          <h3>Double Room</h3>\r\n          <h6 class=\"w3-opacity\">From $149</h6>\r\n          <p>Queen-size bed</p>\r\n          <p>25m<sup>2</sup></p>\r\n          <p class=\"w3-large\"><i class=\"fa fa-bath\"></i> <i class=\"fa fa-phone\"></i> <i class=\"fa fa-wifi\"></i> <i class=\"fa fa-tv\"></i></p>\r\n          <button class=\"w3-button w3-block w3-black w3-margin-bottom\">Choose Room</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w3-third w3-margin-bottom\">\r\n        <img src=\"http://via.placeholder.com/350x150\" alt=\"Norway\" style=\"width:100%\">\r\n        <div class=\"w3-container w3-white\">\r\n          <h3>Deluxe Room</h3>\r\n          <h6 class=\"w3-opacity\">From $199</h6>\r\n          <p>King-size bed</p>\r\n          <p>40m<sup>2</sup></p>\r\n          <p class=\"w3-large\"><i class=\"fa fa-bath\"></i> <i class=\"fa fa-phone\"></i> <i class=\"fa fa-wifi\"></i> <i class=\"fa fa-tv\"></i> <i class=\"fa fa-glass\"></i> <i class=\"fa fa-cutlery\"></i></p>\r\n          <button class=\"w3-button w3-block w3-black w3-margin-bottom\">Choose Room</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"w3-row-padding\" id=\"about\">\r\n      <div class=\"w3-col l4 m7\">\r\n        <h3>About</h3>\r\n        <h6>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>\r\n      </div>\r\n      <div class=\"w3-col l8 m5\">\r\n        <div id=\"googleMap\" style=\"width:100%;height:400px;\" class=\"w3-grayscale\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"w3-row w3-large w3-center\" style=\"margin:32px 0\">\r\n      <div class=\"w3-third\"><i class=\"fa fa-map-marker w3-text-red\"></i> 423 Some adr, Chicago, US</div>\r\n      <div class=\"w3-third\"><i class=\"fa fa-phone w3-text-red\"></i> Phone: +00 151515</div>\r\n      <div class=\"w3-third\"><i class=\"fa fa-envelope w3-text-red\"></i> Email: mail@mail.com</div>\r\n    </div>\r\n\r\n    <div class=\"w3-container\" id=\"contact\">\r\n      <h2>Contact</h2>\r\n      <p>If you have any questions, do not hesitate to ask them.</p>\r\n      <i class=\"fa fa-map-marker w3-text-red\" style=\"width:30px\"></i> Chicago, US<br>\r\n      <i class=\"fa fa-phone w3-text-red\" style=\"width:30px\"></i> Phone: +00 151515<br>\r\n      <i class=\"fa fa-envelope w3-text-red\" style=\"width:30px\"> </i> Email: mail@mail.com<br>\r\n      <form action=\"/action_page.php\" target=\"_blank\">\r\n        <p><input class=\"w3-input w3-padding-16 w3-border\" type=\"text\" placeholder=\"Name\" required name=\"Name\"></p>\r\n        <p><input class=\"w3-input w3-padding-16 w3-border\" type=\"text\" placeholder=\"Email\" required name=\"Email\"></p>\r\n        <p><input class=\"w3-input w3-padding-16 w3-border\" type=\"text\" placeholder=\"Message\" required name=\"Message\"></p>\r\n        <p><button class=\"w3-button w3-black w3-padding-large\" type=\"submit\">SEND MESSAGE</button></p>\r\n      </form>\r\n    </div>\r\n\r\n    <!-- End page content -->\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Add Google Maps -->\r\n  <script>\r\n    function myMap() {\r\n      myCenter = new google.maps.LatLng(41.878114, -87.629798);\r\n      var mapOptions = {\r\n        center: myCenter,\r\n        zoom: 12,\r\n        scrollwheel: false,\r\n        draggable: false,\r\n        mapTypeId: google.maps.MapTypeId.ROADMAP\r\n      };\r\n      var map = new google.maps.Map(document.getElementById(\"googleMap\"), mapOptions);\r\n\r\n      var marker = new google.maps.Marker({\r\n        position: myCenter,\r\n      });\r\n      marker.setMap(map);\r\n    }\r\n      </script>\r\n\r\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap\"></script>\r\n</div>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto:400,100);\r\n\r\nbody {\r\n  background: url(https://dl.dropboxusercontent.com/u/23299152/Wallpapers/wallpaper-22705.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  width: 274px;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input[type=text], input[type=password] {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1);\r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  -webkit-transition: opacity ease 0.5s;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2 class=\"text-center text-black mb-4\">Please Login</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n\r\n          <!-- form card login -->\r\n          <div class=\"card rounded-0\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"mb-0\">Login</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <form class=\"form\" (submit)=\"onLoginSubmit()\" id=\"formLogin\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"uname1\">Username</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" [(ngModel)]=\"username\" name=\"username\" id=\"username\">\r\n                  <!-- <div class=\"invalid-feedback\">Oops, you missed this one.</div> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Password</label>\r\n                  <input type=\"password\" class=\"form-control form-control-lg rounded-0\" [(ngModel)]=\"password\" name=\"password\" id=\"password\">\r\n                  <!-- <div class=\"invalid-feedback\">Enter your password too!</div> -->\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnLogin\">Login</button>\r\n                <button class=\"btn btn-success btn-lg float-left\" [routerLink]=\"['/register']\">Register</button>\r\n              </form>\r\n            </div>\r\n            <!--/card-block-->\r\n          </div>\r\n          <!-- /form card login -->\r\n        </div>\r\n      </div>\r\n      <!--/row-->\r\n    </div>\r\n    <!--/col-->\r\n  </div>\r\n  <!--/row-->\r\n</div>\r\n<!--/container-->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#logo {\r\n  width: 35%;\r\n  height: auto;\r\n}\r\n\r\n.navbar-brand {\r\n  font-family: 'Draconian';\r\n  font-size: 3em;\r\n}\r\n\r\n/* @media all and (min-width: 1280px) {\r\n  .navbar-brand {\r\n    font-size:  3vw;\r\n  }\r\n}\r\n@media all  and (min-width: 992px) and (max-width: 1279px) {\r\n  .navbar-brand {\r\n    font-size:  3vw;\r\n  }\r\n}\r\n\r\n@media all  and (min-width: 360px) and (max-width: 412px) {\r\n  .navbar-brand {\r\n    font-size:  5vw;\r\n  }\r\n}\r\n@media all  and (min-width: 413px) and (max-width: 991px) {\r\n  .navbar-brand {\r\n    font-size:  5vw;\r\n  }\r\n} */\r\n\r\n.center {\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\nul{\r\n  font-size: 1.2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://bootswatch.com/4/litera/bootstrap.min.css\">\r\n\r\n<nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-light\">\r\n  <div class=\"container justify-content-md-center\">\r\n    <div class=\"row \">\r\n\r\n      <div class=\"col-sm-6\">\r\n        <img id=\"logo\" src=\"../assets/images/navbar_logo.png\" alt=\"navbar_logo.png\" class=\"img-responsive\">\r\n        <a class=\"navbar-brand\">Villa Darunea</a>\r\n      </div>\r\n\r\n\r\n      <!--Menu-->\r\n      <div class=\"col-sm-6 center\">\r\n\r\n        <!--Collapse button for menu-->\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n           <span class=\"navbar-toggler-icon\"></span>\r\n         </button>\r\n        <!--END Collapse button for menu-->\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\" @navbar-menu>\r\n\r\n          <ul class=\"navbar-nav\">\r\n\r\n            <li  class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/']\">HOME</a>\r\n            </li>\r\n\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/about']\">ABOUT</a>\r\n            </li>\r\n\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/gallery']\">GALLERY</a>\r\n            </li>\r\n\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/contact']\">CONTACT</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item dropdown\" style=\"clear:both\" >\r\n              <a class=\"nav-link dropdown-toggle\" data-toggle='dropdown' href=\"\" id=\"languages\">LANGUAGE<span class=\"caret\"></span></a>\r\n              <div class=\"dropdown-menu\" ariat-labelledby=\"languages\">\r\n                <div class=\"dropdown-item\"><img src=\"../assets/icons/md.png\" alt=\"\"> <small>RO</small></div>\r\n                <div class=\"dropdown-item\"><img src=\"../assets/icons/ru.png\" alt=\"\"> <small>RU</small></div>\r\n                <div class=\"dropdown-item\"><img src=\"../assets/icons/us.png\" alt=\"\"> <small>EN</small></div>\r\n              </div>\r\n            </li>\r\n\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/login']\">LOGIN</a>\r\n            </li>\r\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\">PROFILE</a>\r\n            </li>\r\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">DASHBOARD</a>\r\n            </li>\r\n            <li  class=\"nav-item\">\r\n              <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">LOGOUT</a>\r\n            </li>\r\n          </ul>\r\n\r\n\r\n        </div>\r\n        <!--END Menu-->\r\n      </div>\r\n\r\n      <!--END Content column-->\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n<!--END Navbar-->\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are now logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('navbar-menu', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.nav-item', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateY(-40px)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.nav-item', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports) {

module.exports = "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }\r\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"error-template\">\n        <h1>\n                      Oops!</h1>\n        <h2>\n                      404 Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!\n        </div>\n        <div class=\"error-actions\">\n          <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/home']\">Take Me Home</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\r\n  <h2 class=\"page-header\"> Welcome {{user.name}}</h2>\r\n  <ul class=\"list-group\"></ul>\r\n  <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n  <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2 class=\"text-center text-black mb-4\">Please Register</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n\r\n          <!-- form card login -->\r\n          <div class=\"card rounded-0\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"mb-0\">Register</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <form (submit)='onRegisterSubmit()' class=\"form\" id=\"formRegister\">\r\n                <div class=\"form-group\">\r\n                  <label >Full Name</label>\r\n                  <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control form-control-lg rounded-0\" >\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Username</label>\r\n                  <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control form-control-lg rounded-0\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label >Email</label>\r\n                  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control form-control-lg rounded-0\" >\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Password</label>\r\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control form-control-lg rounded-0\">\r\n                </div>\r\n                <flash-messages></flash-messages>\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnRegister\">Register</button>\r\n              </form>\r\n            </div>\r\n            <!--/card-block-->\r\n          </div>\r\n          <!-- /form card login -->\r\n        </div>\r\n      </div>\r\n      <!--/row-->\r\n    </div>\r\n    <!--/col-->\r\n  </div>\r\n  <!--/row-->\r\n</div>\r\n<!--/container-->\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/resort/resort.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resort/resort.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  resort works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/resort/resort.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResortComponent = /** @class */ (function () {
    function ResortComponent() {
    }
    ResortComponent.prototype.ngOnInit = function () {
    };
    ResortComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resort',
            template: __webpack_require__("./src/app/components/resort/resort.component.html"),
            styles: [__webpack_require__("./src/app/components/resort/resort.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResortComponent);
    return ResortComponent;
}());



/***/ }),

/***/ "./src/app/components/rooms/rooms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rooms works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomsComponent = /** @class */ (function () {
    function RoomsComponent() {
    }
    RoomsComponent.prototype.ngOnInit = function () {
    };
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__("./src/app/components/rooms/rooms.component.html"),
            styles: [__webpack_require__("./src/app/components/rooms/rooms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //localstorage can store only strings, no objects
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email); //re- regular expression
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map