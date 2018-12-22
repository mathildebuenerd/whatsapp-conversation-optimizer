webpackJsonp([0],{

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(72);

// CONCATENATED MODULE: ./src/pages/home/home.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var home_HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.currentName = '';
        this.askForName = false;
    }
    HomePage.prototype.scrapConversation = function () {
        var _this = this;
        var getContent = browser.tabs.executeScript(null, { file: '../assets/js/content.js' }).then(function (content) {
            console.log("promesse réussie");
            console.log(content);
            _this.askForName = true;
            _this.currentConversation = content;
            // console.log(JSON.parse(localStorage.getItem("conversations")));
            // console.log(JSON.parse(localStorage.getItem("conversations")));
        }).catch(function (error) {
            console.log("promesse échouée", error);
        });
    };
    HomePage.prototype.openAddContactForm = function () {
    };
    HomePage.prototype.addConversationToStorage = function () {
        // localStorage.removeItem("conversations");
        if (!JSON.parse(localStorage.getItem("conversations"))) {
            console.log("conversations n'existe pas");
            var conversations_1 = [];
            localStorage.setItem('conversations', JSON.stringify(conversations_1));
        }
        // as we can't "push()" into the localstorage
        // we have to first get all the content, modify it and then add it back to the localstorage
        var conversations = [];
        conversations = JSON.parse(localStorage.getItem('conversations'));
        // console.log(conversations);
        conversations.push({
            name: this.currentName,
            messages: this.currentConversation
        });
        localStorage.setItem("conversations", JSON.stringify(conversations));
        console.log(JSON.parse(localStorage.getItem("conversations")));
        this.currentName = "";
        this.currentConversation = "";
        this.askForName = false;
    };
    HomePage = __decorate([
        Object(core["k" /* Component */])({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [ionic_angular["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/services/getWhatsappConversations.service.ts
var getWhatsappConversations_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var getWhatsappConversations_service_GetWhatsappConversationsService = /** @class */ (function () {
    function GetWhatsappConversationsService() {
    }
    GetWhatsappConversationsService = getWhatsappConversations_service___decorate([
        Object(core["w" /* Injectable */])()
    ], GetWhatsappConversationsService);
    return GetWhatsappConversationsService;
}());

//# sourceMappingURL=getWhatsappConversations.service.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var app_component_MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        this.rootPage = home_HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = app_component___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'app.html'
        }),
        app_component___metadata("design:paramtypes", [ionic_angular["e" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */], getWhatsappConversations_service_GetWhatsappConversationsService])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var app_module_AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = app_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                app_component_MyApp,
                home_HomePage
            ],
            imports: [
                platform_browser["a" /* BrowserModule */],
                ionic_angular["c" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: []
                })
            ],
            bootstrap: [ionic_angular["a" /* IonicApp */]],
            entryComponents: [
                app_component_MyApp,
                home_HomePage
            ],
            providers: [
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                getWhatsappConversations_service_GetWhatsappConversationsService,
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_MyApp = [];
var RenderType_MyApp = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 2, "ion-nav", [], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_32" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"] }, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rootPage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MyApp_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */], getWhatsappConversations_service_GetWhatsappConversationsService], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-title.js
var card_title = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list-header.js
var list_header = __webpack_require__(62);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_1(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 28, "ion-card", [["padding", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 2, "ion-card-title", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, card_title["a" /* CardTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["Remember that conversation"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](8, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_16" /* ɵdid */](12, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, 1, 2, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](15, 16384, [[1, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["Contact Name"])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](18, 0, null, 3, 4, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.currentName = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_16" /* ɵdid */](19, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_32" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["_16" /* ɵdid */](21, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["_16" /* ɵdid */](22, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, null, 2, "button", [["ion-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addConversationToStorage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](26, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["Add to storage"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.currentName; _ck(_v, 19, 0, currVal_7); var currVal_8 = "text"; _ck(_v, 22, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 21).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 21).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 21).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 21).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 21).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 21).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 21).ngClassPending; _ck(_v, 18, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (_co.currentName === ""); _ck(_v, 25, 0, currVal_9); }); }
function View_HomePage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 81, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, 1, 9, "ion-card", [["padding", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 1, "ion-card-title", [], null, null, null, null, null)), core["_16" /* ɵdid */](7, 16384, null, 0, card_title["a" /* CardTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](9, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrapConversation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](10, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["Get this conversation"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n\n\n\n\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_HomePage_1)), core["_16" /* ɵdid */](15, 16384, null, 0, common["i" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, 1, 63, "ion-card", [["padding", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](18, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 2, "ion-card-title", [], null, null, null, null, null)), core["_16" /* ɵdid */](21, 16384, null, 0, card_title["a" /* CardTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, null, ["Your stats"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](24, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](25, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_16" /* ɵdid */](29, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](31, 0, null, 2, 6, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](32, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_16" /* ɵdid */](36, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["Most positive contact"])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](39, 0, null, 2, 1, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](40, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_17" /* ɵeld */](43, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](44, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_16" /* ɵdid */](48, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](50, 0, null, 2, 6, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](51, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_16" /* ɵdid */](55, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["Most negative contact"])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](58, 0, null, 2, 1, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](59, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_17" /* ɵeld */](62, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](63, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_16" /* ɵdid */](67, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](69, 0, null, 2, 6, "ion-list-header", [["class", "item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](70, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_34" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_34" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_34" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_16" /* ɵdid */](74, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["Positivity over days"])), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_17" /* ɵeld */](77, 0, null, 2, 1, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](78, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.askForName; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 40).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 40)._hasRefresher; _ck(_v, 39, 0, currVal_3, currVal_4); var currVal_5 = core["_29" /* ɵnov */](_v, 59).statusbarPadding; var currVal_6 = core["_29" /* ɵnov */](_v, 59)._hasRefresher; _ck(_v, 58, 0, currVal_5, currVal_6); var currVal_7 = core["_29" /* ɵnov */](_v, 78).statusbarPadding; var currVal_8 = core["_29" /* ɵnov */](_v, 78)._hasRefresher; _ck(_v, 77, 0, currVal_7, currVal_8); }); }
function View_HomePage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(111);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, HomePageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_33" /* ɵq */], [[3, core["C" /* LOCALE_ID */]]]), core["_26" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_26" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_19" /* ɵi */], []), core["_26" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_27" /* ɵn */], []), core["_26" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_30" /* ɵo */], []), core["_26" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_26" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_26" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["G" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_26" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_26" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_26" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_26" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_26" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["b" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_26" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_26" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_26" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_26" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_26" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_26" /* ɵmpd */](4608, getWhatsappConversations_service_GetWhatsappConversationsService, getWhatsappConversations_service_GetWhatsappConversationsService, []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_26" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_26" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_26" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_26" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_26" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_26" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [] }, []), core["_26" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_26" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_26" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_26" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_26" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_26" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_26" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_26" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ })

},[184]);
//# sourceMappingURL=main.js.map