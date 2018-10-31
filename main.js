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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-menu></app-menu>\n<app-content></app-content>"

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
        this.title = 'Web';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/content/content.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.nav-item{\r\n    width: 18%;\r\n}\r\n.nav-item img{\r\n    width: 100%;\r\n}\r\n.media:hover{\r\n    background-color: #f9f9f9;\r\n}\r\n.media i,a{\r\n    color: black;\r\n}\r\n.cot1, .cot2{\r\n    font-size: 1.5em;\r\n}\r\n.media-body a,h5{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\ni{\r\n    margin: 10px;\r\n}\r\n.item1{\r\n    width: 25%;\r\n}\r\n.videohot{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n.itemvideohot{\r\n    width: 24%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.listalbumhot{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    flex-wrap: wrap;\r\n}\r\n.item-album-hot{\r\n    width: 24%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.chu-de-hot .list-group-item{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.tintuc .card-header{\r\n    width: 50%;\r\n}\r\n.tintuc{margin: 0px;\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUdEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUNELFFBQVEsWUFBWTtJQUNoQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgd2lkdGg6IDE4JTtcclxufVxyXG5cclxuLm5hdi1pdGVtIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVkaWE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG59XHJcbi5tZWRpYSBpLGF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvdDEsIC5jb3Qye1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4ubWVkaWEtYm9keSBhLGg1e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaXtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaXRlbTF7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbi52aWRlb2hvdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLml0ZW12aWRlb2hvdHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuXHJcbi5saXN0YWxidW1ob3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5pdGVtLWFsYnVtLWhvdHtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uY2h1LWRlLWhvdCAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnRpbnR1YyAuY2FyZC1oZWFkZXJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi50aW50dWN7bWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: white; margin-top: 0px;\">\n    <div class=\"row\">\n        <!-- cot trai -->\n        <div class=\"col col-sm-8 mt-2\">\n            <div class=\"banner\" style=\"width: 100%; height: auto;\">\n                <a href=\"#\">\n                    <img src=\"https://photo-zmp3.zadn.vn/banner/6/6/0/c/660c5fb0747631e106b34203463f2795.jpg\" width=\"100%\"\n                        height=\"auto\" alt=\"\">\n                </a>\n            </div>\n            <!-- nut nhan duoi banner -->\n            <div class=\"dsnutnhan mt-2 mb-2\">\n                <ul class=\"nav justify-content-between \" id=\"nutnhan\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/banner/6/6/0/c/660c5fb0747631e106b34203463f2795.jpg\"\n                                alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/banner/a/4/7/a/a47addfcd22d83ae8807b6a9947f690f.jpg\"\n                                alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/banner/8/9/e/3/89e383f7d6bc99ad59d185c1f7ab7a60.jpg\"\n                                alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/banner/5/f/d/6/5fd670b09afa7b7a4bcaf0756f791481.jpg\"\n                                alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/banner/4/7/d/4/47d4127aca3e2c8f815dd6e1a01f4515.jpg\"\n                                alt=\"\">\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n            <!-- ds bai hat -->\n            <ul class=\"list-unstyled\">\n                <li class=\"media\">\n                    <span class=\"align-self-center mr-3 cot1\">1</span>\n                    <span class=\"align-self-center mr-3 cot2\">-</span>\n                    <a href=\"#\" class=\"align-self-center\">\n                        <img class=\"align-self-center mr-3\" src=\"https://photo-zmp3.zadn.vn/thumb/94_94/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg\"\n                            alt=\"Generic placeholder image\">\n                    </a>\n\n                    <div class=\"media-body align-self-center mr-3\">\n                        <a href=\"#\">\n                            <h5>Thằng Điên</h5>\n                        </a>\n                        <a href=\"#\"><span>JustaTee, Phương Ly</span></a>\n                    </div>\n                    <div class=\"media-footer align-self-center mr-3\">\n                        <a href=\"#\" title=\"download\"><i class=\"fas fa-download \"></i></a>\n                        <a href=\"#\" title=\"plus\"><i class=\"fas fa-plus\"></i></a>\n                        <a href=\"#\" title=\"share\"><i class=\"fas fa-share-alt\"></i></a>\n\n                    </div>\n                    <span class=\"ml-3 align-self-center\">696969</span>\n\n                </li>\n                <hr class=\"mt-2 mb-2\">\n                <li class=\"media\">\n                    <span class=\"align-self-center mr-3 cot1\">2</span>\n                    <span class=\"align-self-center mr-3 cot2\">-</span>\n                    <a href=\"#\" class=\"align-self-center\"><img class=\"align-self-center mr-3\" src=\"https://photo-zmp3.zadn.vn/thumb/94_94/cover/7/9/8/5/798559c5b7d028c351d34a37c7a598cc.jpg\"\n                            alt=\"Generic placeholder image\"></a>\n\n                    <div class=\"media-body align-self-center mr-3\">\n                        <a href=\"#\">\n                            <h5>Vô Tình</h5>\n                        </a>\n                        <a href=\"#\"><span>Xesi, Hoaprox</span></a>\n                    </div>\n                    <div class=\"media-footer align-self-center mr-3\">\n                        <a href=\"#\" title=\"download\"><i class=\"fas fa-download\"></i></a>\n                        <a href=\"#\" title=\"plus\"><i class=\"fas fa-plus\"></i></a>\n                        <a href=\"#\" title=\"share\"><i class=\"fas fa-share-alt\"></i></a>\n\n                    </div>\n                    <span class=\"ml-3 align-self-center\">696969</span>\n                </li>\n                <hr class=\"mt-2 mb-2\">\n                <li class=\"media\">\n                    <span class=\"align-self-center mr-3 cot1\">3</span>\n                    <span class=\"align-self-center mr-3 cot2\">-</span>\n                    <a href=\"#\" class=\"align-self-center\"><img class=\"align-self-center mr-3\" src=\"https://photo-zmp3.zadn.vn/thumb/94_94/cover/9/9/7/2/997250daaebfe5c1a8f29a5fce90248a.jpg\"\n                            alt=\"Generic placeholder image\"></a>\n\n                    <div class=\"media-body align-self-center mr-3\">\n                        <a href=\"#\">\n                            <h5>Càng Níu Giữ Càng Dễ Mất</h5>\n                        </a>\n                        <a href=\"#\"><span>Mr Siro</span></a>\n                    </div>\n                    <div class=\"media-footer align-self-center mr-3\">\n                        <a href=\"#\" title=\"download\"><i class=\"fas fa-download\"></i></a>\n                        <a href=\"#\" title=\"plus\"><i class=\"fas fa-plus\"></i></a>\n                        <a href=\"#\" title=\"share\"><i class=\"fas fa-share-alt\"></i></a>\n\n                    </div>\n                    <span class=\"ml-3 align-self-center\">696969</span>\n                </li>\n                <hr class=\"mt-2 mb-2\">\n                <li class=\"media\">\n                    <span class=\"align-self-center mr-3 cot1\">4</span>\n                    <span class=\"align-self-center mr-3 cot2\">-</span>\n                    <a href=\"#\" class=\"align-self-center\"><img class=\"align-self-center mr-3\" src=\"https://photo-zmp3.zadn.vn/thumb/94_94/cover/2/4/3/6/2436b0b8130f7c2199d9803c0b85d57d.jpg\"\n                            alt=\"Generic placeholder image\"></a>\n\n                    <div class=\"media-body align-self-center mr-3\">\n                        <a href=\"#\">\n                            <h5>Hongkong1 (Official Version)</h5>\n                        </a>\n                        <a href=\"#\"><span>Nguyễn Trọng Tài, San Ji, Double X</span></a>\n                    </div>\n                    <div class=\"media-footer align-self-center mr-3\">\n                        <a href=\"#\" title=\"download\"><i class=\"fas fa-download\"></i></a>\n                        <a href=\"#\" title=\"plus\"><i class=\"fas fa-plus\"></i></a>\n                        <a href=\"#\" title=\"share\"><i class=\"fas fa-share-alt\"></i></a>\n\n                    </div>\n                    <span class=\"ml-3 align-self-center\">696969</span>\n                </li>\n                <hr class=\"mt-2 mb-2\">\n                <li class=\"media\">\n                    <span class=\"align-self-center mr-3 cot1\">5</span>\n                    <span class=\"align-self-center mr-3 cot2\">-</span>\n                    <a href=\"#\" class=\"align-self-center\">\n                        <img class=\"align-self-center mr-3\" src=\"https://photo-zmp3.zadn.vn/thumb/94_94/cover/3/b/c/d/3bcd4a21a806a35f4b54f600b818faac.jpg\"\n                            alt=\"Generic placeholder image\">\n                    </a>\n\n                    <div class=\"media-body align-self-center mr-3\">\n                        <a href=\"#\">\n                            <h5>Tận Cùng Nỗi Nhớ</h5>\n                        </a>\n                        <a href=\"#\"><span>Will</span></a>\n                    </div>\n                    <div class=\"media-footer align-self-center mr-3\">\n                        <a href=\"#\" title=\"download\"><i class=\"fas fa-download\"></i></a>\n                        <a href=\"#\" title=\"plus\"><i class=\"fas fa-plus\"></i></a>\n                        <a href=\"#\" title=\"share\"><i class=\"fas fa-share-alt\"></i></a>\n\n                    </div>\n                    <span class=\"ml-3 align-self-center\">696969</span>\n                </li>\n\n            </ul>\n            <h2>BUỔI TỐI NHẸ NHÀNG</h2>\n            <!-- dong 1 -->\n            <div class=\"justify-content-between flex-row d-flex\">\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/covers/5/9/595dbb9691e68f61924809f77ab39c7b_1520993790.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <a href=\"#\">\n                            <span>Góc Nhạc Cũ</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/d/9/f/c/d9fc6921445d3d25c689fd89008a5085.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Romantic Evening</span>\n                    </div>\n                </div>\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/6/6/d/4/66d463cb5f26b4db541d747c71bc7221.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Romantic Evening</span>\n                    </div>\n                </div>\n                <div class=\"item1\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/4/a/4/0/4a401cece03887dedcfa84f1356a5530.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Romantic Evening</span>\n                    </div>\n                </div>\n\n            </div>\n            <!-- dong 2 -->\n            <div class=\"justify-content-between flex-row d-flex mt-3\">\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/1/7/d/8/17d8393bfdff4efdb4473431e896445a.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <a href=\"#\">\n                            <span>Nhạc Phim Hong Kong Hay Nhất</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/5/c/f/a/5cfad8c9e064cb5603c08abe6b487a88.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Chuyện Tình Lướt Qua</span>\n                    </div>\n                </div>\n                <div class=\"item1 mr-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/3/a/f/c/3afcdb854e2d1c5f5a2883d58e07c0e6.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Thao Thức Vì Em - Tuyệt Phẩm Bolero</span>\n                    </div>\n                </div>\n                <div class=\"item1\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/0/5/4/1/05412503fc33408872821fc66ce14d6f.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <div>\n                        <span>Ngày Ấy Và Bây Giờ</span>\n                    </div>\n                </div>\n\n            </div>\n            <h2 class=\"mt-2\">VIDEO HOT </h2>\n            <ul class=\"list-group  videohot\">\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/0/d/a/f/0daf4d5bf746177f55bd22ce0d77cf64.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/d/4/8/1/d481d6e2fd2783cd8d1d747d7e09bec4.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\" https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/d/9/5/9/d9596f1082e736d59d716010bd2d2fb5.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/a/8/3/6/a83606b0e9477205f940c1a3d975fdef.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/9/2/5/f/925f0b4685c0ffe3277071086cde280d.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/f/5/e/7/f5e7a1c54d66dc3a2eb61e5e2e3c9bcb.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/d/a/0/b/da0bb1b4dc2e3e46084485080c5f8b84.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/7/2/7/3/7273e19fd3072b86096384fc82bb24de.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/c/7/a/8/c7a8b0b7c31bf269f111f63ffcc3c5d2.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/f/b/3/4/fb344d5e1fcf15e905a7adf10d553753.jpg\"\n                                width=\"100%\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/a/d/8/2/ad82573c35b50d5fe2f0a086e450e837.jpg\"\n                                width=\"100%\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item itemvideohot mb-2\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_135/thumb_video/d/7/0/3/d70360c0c1dbdb8aa116bd939f2d442e.jpg\"\n                                width=\"100%\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n\n            </ul>\n            <h2 class=\"mt-2\">ALBUM HOT </h2>\n            <ul class=\"list-group listalbumhot\">\n                <li class=\"list-group-item item-album-hot\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/1/3/d/2/13d24973ef7ce6f878ac8454d76956af.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/f/5/2/1/f5218339da7931f8d3dbe52b8d76ec40.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/9/e/9/c/9e9ca2bfeb4fb8501492adf046a4ed03.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot\">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/1/d/d/e/1ddedf9c0afe45e89f501d338545fe07.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/1/2/b/8/12b88922410ad579dce22031b12c05ca.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/covers/6/3/6329aa33241f2e6a8fe1c725e8e92447_1510300791.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n\n\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/9/9/7/2/997250daaebfe5c1a8f29a5fce90248a.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/5/1/d/9/51d92b15128a3e9098e08b5517a8cb1a.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/1/2/6/6/12663468aca24742e3c21795ae7758ad.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/b/d/b/d/bdbd87f04138ce2576e9ae02142322ca.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/8/b/f/4/8bf4e7c271824c7e11467505256ca540.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n                <li class=\"list-group-item item-album-hot \">\n                    <div>\n                        <a href=\"#\">\n                            <img src=\"https://photo-zmp3.zadn.vn/thumb/240_240/cover/9/5/7/b/957ba0e640a5ae179e0f37af0bb99aa5.jpg\"\n                                width=\"100%\" alt=\"\">\n                        </a>\n                    </div>\n                    <span>abc</span>\n                </li>\n\n            </ul>\n        </div>\n        <!-- cot phai -->\n        <div class=\"col col-sm-4\">\n            <div class=\"mt-2\">\n                <h4 class=\"text-center\">CHỦ ĐỀ HOT</h4>\n                <ul class=\"list-group chu-de-hot\">\n                    <li class=\"list-group-item\">\n                        <a href=\"#\"><img src=\"https://photo-zmp3.zadn.vn/covers/d/1/d1c2738deec7efd1942a3027a1c436b0_1499828277.jpg\"\n                                width=\"100%\" alt=\"\"></a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a href=\"#\"><img src=\"https://photo-zmp3.zadn.vn/cover/8/5/d/9/85d991c244de59021815a700d7a24d25.jpg\"\n                                width=\"100%\" alt=\"\"></a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a href=\"#\"><img src=\"https://photo-zmp3.zadn.vn/cover/5/5/a/6/55a619ea7a0c39489ddf1f0430e01056.jpg\"\n                                width=\"100%\" alt=\"\"></a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a href=\"#\"><img src=\"https://photo-zmp3.zadn.vn/covers/d/2/d28ef98a1827d390296f2759555cc606_1499827932.jpg\"\n                                width=\"100%\" alt=\"\"></a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a href=\"#\"><img src=\"https://photo-zmp3.zadn.vn/covers/9/5/95488ad8d45bd69ef83e9403c4114375_1499827707.jpg\"\n                                width=\"100%\" alt=\"\"></a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"mt-2\">\n                <h4 class=\"text-center\">TIN TỨC ÂM NHẠC</h4>\n                <img src=\"https://znews-photo.zadn.vn/w480/Uploaded/ohunuai/2018_10_26/IMG_13801.jpg\" width=\"100%\" alt=\"\">\n                <ul class=\"list-unstyled\">\n                    <li class=\"media mt-3\">\n                        <img class=\"align-self-center mr-3\" src=\"https://znews-photo.zadn.vn/w480/Uploaded/qfssu/2018_10_26/collage.jpg\"\n                            width=\"40%\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body align-self-center\">\n                            <a href=\"#\">\n                                Ca sĩ Thằng điên chia sẻ về vợ hot girl và những ngày thiếu tiền\n                            </a>\n\n                        </div>\n\n                    </li>\n                    <li class=\"media mt-3\">\n                        <img class=\"align-self-center mr-3\" src=\"https://znews-photo.zadn.vn/w480/Uploaded/qfssu/2018_10_25/TAF0576_thumb.jpg\"\n                            width=\"40%\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body align-self-center\">\n                            <a href=\"#\">\n                                MV mới của Bảo Thy: Chất lượng bị che lấp vì màn quảng cáo quá đà\n                            </a>\n\n                        </div>\n\n                    </li>\n                    <li class=\"media mt-3\">\n                        <img class=\"align-self-center mr-3\" src=\"https://znews-photo.zadn.vn/w480/Uploaded/unvjuas/2018_10_24/fla4344.jpg\" width=\"40%\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body align-self-center\">\n                            <a href=\"#\">\n                                Tác giả hit 'Thằng điên' bức xúc vì bị cáo buộc đạo nhạc\n                            </a>\n\n                        </div>\n\n                    </li>\n\n                    <li class=\"media mt-3\">\n                        <img class=\"align-self-center mr-3\" src=\"https://znews-photo.zadn.vn/w480/Uploaded/unvjuas/2018_10_23/thang_dien_0.jpg\" width=\"40%\"\n                            alt=\"Generic placeholder image\">\n                        <div class=\"media-body align-self-center\">\n                            <a href=\"#\">\n                                'Đừng như thói quen' đạt 300 triệu lượt nghe, sánh ngang các siêu hit\n                            </a>\n\n                        </div>\n\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: black;\">\n    <div class=\"container\">\n        <nav class=\"navbar navbar-expand-sm navbar-dark\">\n            <a class=\"navbar-brand\" href=\"#\">zingmp3</a>\n            <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n                aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"></button>\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n                <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                    <li class=\"nav-item active\">\n                        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">Link</a>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdownId\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownId\">\n                            <a class=\"dropdown-item\" href=\"#\">Action 1</a>\n                            <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n                        </div>\n                    </li>\n                </ul>\n                <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n                </form>\n            </div>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: darkgrey;\">\n    <div class=\"container\">\n       <h2 style=\"margin: 0px;\"> day la menu</h2>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Angular\Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map