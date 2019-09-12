webpackJsonp([2],{

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contacts/contact-profile/contact-profile.module.ngfactory": [
		247,
		1
	],
	"../pages/contacts/contacts.module.ngfactory": [
		248,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ContactProfilePage */
/* unused harmony export View_ContactProfilePage_0 */
/* unused harmony export View_ContactProfilePage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProfilePageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_card_card__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_card_card_title__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toolbar_toolbar_header__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_menu_menu_toggle__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_menu_controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar_item__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_icon_icon__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_content_content__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_platform_keyboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_toolbar_toolbar_title__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__contact_profile__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_TextAnalysis_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular_navigation_nav_params__ = __webpack_require__(9);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var styles_ContactProfilePage = [];
var RenderType_ContactProfilePage = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_ContactProfilePage, data: {} });

function View_ContactProfilePage_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.analyzeContact() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 0, ["Analyze contact"]))], null, null); }
function View_ContactProfilePage_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.analyzeContact() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 0, ["Update contact analysis"]))], null, null); }
function View_ContactProfilePage_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 7, "span", [["class", "emoji"]], [[1, "data-occurrence", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](2, 0, null, null, 1, "span", [["class", "emoji-character"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](5, 0, null, null, 1, "span", [["class", "emoji-occurrence"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.occurrence; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.character; _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.occurrence; _ck(_v, 6, 0, currVal_2); }); }
function View_ContactProfilePage_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 7, "span", [["class", "emoji"]], [[1, "data-occurrence", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](2, 0, null, null, 1, "span", [["class", "emoji-character"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](5, 0, null, null, 1, "span", [["class", "emoji-occurrence"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.occurrence; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.character; _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.occurrence; _ck(_v, 6, 0, currVal_2); }); }
function View_ContactProfilePage_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 34, "ion-card", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_card_card__["a" /* Card */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](3, 0, null, null, 2, "ion-card-title", [["padding", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_card_card_title__["a" /* CardTitle */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["Favourite emojis"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](7, 0, null, null, 11, "div", [["class", "container"], ["padding", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](9, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["Sent"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](12, 0, null, null, 4, "div", [["class", "emoji-list"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, null, 1, null, View_ContactProfilePage_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](15, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](21, 0, null, null, 11, "div", [["class", "container"], ["padding", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](23, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["Received"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](26, 0, null, null, 4, "div", [["class", "emoji-list"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, null, 1, null, View_ContactProfilePage_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](29, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.favouriteEmojis["out"]; _ck(_v, 15, 0, currVal_0); var currVal_1 = _co.favouriteEmojis["in"]; _ck(_v, 29, 0, currVal_1); }, null); }
function View_ContactProfilePage_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 16, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](3, 0, null, null, 12, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](6, 0, null, 0, 8, "button", [["menuToggle", "left"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 7).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](7, 1064960, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_menu_menu_toggle__["a" /* MenuToggle */], [__WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_menu_controller__["a" /* MenuController */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__["a" /* Button */]], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](8, 16384, null, 1, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar_item__["a" /* ToolbarItem */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](11, 0, null, null, 2, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](12, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["Return to contact list"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](18, 0, null, null, 18, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](19, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_19_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_21_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_22_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](21, 0, null, 1, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_23__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_23__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](22, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_16_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](23, 0, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](25, 0, null, 1, 7, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, null, 1, null, View_ContactProfilePage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["i" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, null, 1, null, View_ContactProfilePage_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](31, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["i" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, 1, 1, null, View_ContactProfilePage_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](35, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["i" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "left"; _ck(_v, 7, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 12, 0, currVal_5); var currVal_9 = !_co.isAnalyzed; _ck(_v, 28, 0, currVal_9); var currVal_10 = _co.isAnalyzed; _ck(_v, 31, 0, currVal_10); var currVal_11 = _co.isAnalyzed; _ck(_v, 35, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 7).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 12)._hidden; _ck(_v, 11, 0, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 19).statusbarPadding; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 19)._hasRefresher; _ck(_v, 18, 0, currVal_6, currVal_7); var currVal_8 = _co.name; _ck(_v, 23, 0, currVal_8); }); }
function View_ContactProfilePage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 1, "page-contact-profile", [], null, null, null, View_ContactProfilePage_0, RenderType_ContactProfilePage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_25__contact_profile__["a" /* ContactProfilePage */], [__WEBPACK_IMPORTED_MODULE_26__services_TextAnalysis_service__["a" /* TextAnalysisService */], __WEBPACK_IMPORTED_MODULE_27_ionic_angular_navigation_nav_params__["a" /* NavParams */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactProfilePageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵccf */]("page-contact-profile", __WEBPACK_IMPORTED_MODULE_25__contact_profile__["a" /* ContactProfilePage */], View_ContactProfilePage_Host_0, {}, {}, []);

//# sourceMappingURL=contact-profile.ngfactory.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ContactsPage */
/* unused harmony export View_ContactsPage_0 */
/* unused harmony export View_ContactsPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toolbar_toolbar_header__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_toolbar_toolbar_title__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_content_content_ngfactory__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_content_content__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_dom_controller__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_keyboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_list_list__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_gestures_gesture_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__contacts__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_angular_navigation_nav_params__ = __webpack_require__(9);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var styles_ContactsPage = [];
var RenderType_ContactsPage = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_ContactsPage, data: {} });

function View_ContactsPage_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 6, "ion-item", [["class", "item item-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onGoToSingleContact(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](6, 2, ["\n      ", "\n    "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 6, 0, currVal_0); }); }
function View_ContactsPage_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toolbar_toolbar_header__["a" /* Header */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["b" /* View_Navbar_0 */], __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_toolbar_navbar_ngfactory__["a" /* RenderType_Navbar */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 3, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, __WEBPACK_IMPORTED_MODULE_13__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["b" /* View_ToolbarTitle_0 */], __WEBPACK_IMPORTED_MODULE_13__node_modules_ionic_angular_components_toolbar_toolbar_title_ngfactory__["a" /* RenderType_ToolbarTitle */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](7, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_toolbar_toolbar_title__["a" /* ToolbarTitle */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_15_ionic_angular_components_toolbar_toolbar__["a" /* Toolbar */]], [2, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_toolbar_navbar__["a" /* Navbar */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 0, ["All contacts"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 3, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](12, 0, null, null, 9, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_content_content_ngfactory__["b" /* View_Content_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_ionic_angular_components_content_content_ngfactory__["a" /* RenderType_Content */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](13, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_17_ionic_angular_components_content_content__["a" /* Content */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_18_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_20_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgZone */], [2, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__["a" /* NavController */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](15, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_list_list__["a" /* List */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */], __WEBPACK_IMPORTED_MODULE_18_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_22_ionic_angular_gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_19_ionic_angular_platform_dom_controller__["a" /* DomController */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵand */](16777216, null, null, 1, null, View_ContactsPage_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](19, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_23__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, 1, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.contactList; _ck(_v, 19, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); }); }
function View_ContactsPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 1, "page-contacts", [], null, null, null, View_ContactsPage_0, RenderType_ContactsPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_24__contacts__["a" /* ContactsPage */], [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_25_ionic_angular_navigation_nav_params__["a" /* NavParams */]], null, null)], null, null); }
var ContactsPageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵccf */]("page-contacts", __WEBPACK_IMPORTED_MODULE_24__contacts__["a" /* ContactsPage */], View_ContactsPage_Host_0, {}, {}, []);

//# sourceMappingURL=contacts.ngfactory.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(80);

// EXTERNAL MODULE: ./src/pages/contacts/contacts.ts
var contacts = __webpack_require__(81);

// EXTERNAL MODULE: ./src/pages/contacts/contact-profile/contact-profile.ts
var contact_profile = __webpack_require__(55);

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
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.currentName = "";
        // If the localStorage is empty, we add "conversations" and "contactList" items
        if (!JSON.parse(localStorage.getItem("conversations"))) {
            var conversations = [];
            localStorage.setItem("conversations", JSON.stringify(conversations));
        }
        if (!JSON.parse(localStorage.getItem("contactList"))) {
            // We also create a contactList array
            var contactList = [];
            localStorage.setItem("contactList", JSON.stringify(contactList));
        }
    }
    HomePage.prototype.scrapConversation = function () {
        var _this = this;
        var getContent = browser.tabs.executeScript(null, { file: "../assets/js/content.js" }).then(function (content) {
            console.log("content", content);
            _this.currentConversation = content[0]["messages"];
            _this.currentName = content[0]["contactName"];
            _this.askForLanguage();
            _this.onGoToSingleContact(_this.currentName);
        }).catch(function (error) {
            console.warn("promesse échouée", error);
        });
    };
    HomePage.prototype.onGoToSingleContact = function (name) {
        this.navCtrl.push(contact_profile["a" /* ContactProfilePage */], { contactName: name });
    };
    HomePage.prototype.addConversationToStorage = function (contactName, language) {
        // as we can't "push()" into the localstorage
        // we have to first get all the content, modify it and then add it back to the localstorage
        var conversations = JSON.parse(localStorage.getItem("conversations"));
        // console.log(conversations);
        var isNew = true;
        for (var _i = 0, conversations_1 = conversations; _i < conversations_1.length; _i++) {
            var contact = conversations_1[_i];
            if (contact.name === contactName) {
                // If we have already added that contact, we update the already existing entry instead of adding a new one
                contact.language = language;
                contact.messages = this.currentConversation;
                // as the contact was already in the list, we set isNew to false so that it will not be added once again
                isNew = false;
                break;
            }
        }
        if (isNew) {
            // If it's the first time we see that contact, then we add a new entry
            conversations.push({
                language: language,
                messages: this.currentConversation,
                name: contactName,
            });
            // And we also add it to the contactList
            var contactList = JSON.parse(localStorage.getItem("contactList"));
            contactList.push(contactName);
            localStorage.setItem("contactList", JSON.stringify(contactList));
        }
        localStorage.setItem("conversations", JSON.stringify(conversations));
        this.currentName = "";
        this.currentConversation = {};
    };
    HomePage.prototype.askForLanguage = function () {
        var _this = this;
        console.log("i am gonna ask for language");
        var promptAlert = this.alertCtrl.create({
            buttons: [
                {
                    handler: function (data) { return _this.addConversationToStorage(_this.currentName, data.language); },
                    text: "Save conversation",
                },
            ],
            inputs: [
                {
                    name: "language",
                    placeholder: "en",
                    value: "en",
                },
            ],
            message: "What language it is?",
            title: "Add conversation with " + this.currentName,
        });
        promptAlert.present();
    };
    HomePage.prototype.printLocalStorage = function (key) {
        console.log(JSON.parse(localStorage.getItem(key)));
    };
    HomePage.prototype.showTextData = function () {
        this.getContactName().then(function (contactName) {
            // Shows the conversation in a text form so that we can use it for training the LSTM model
            var data = JSON.parse(localStorage.getItem("conversations"));
            var text = "";
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var contact = data_1[_i];
                if (contact.name === contactName) {
                    for (var _a = 0, _b = contact.messages.messagesIn; _a < _b.length; _a++) {
                        var message = _b[_a];
                        // Because message.emojis is an array, we remove the commas
                        var emojis = String(message.emojis).replace(/,/g, "");
                        // Add a line break at the end of the sentence
                        text += message.text + " " + emojis + " \r";
                    }
                }
            }
        });
    };
    HomePage.prototype.getContactName = function () {
        return browser.tabs.executeScript(null, { file: "../assets/js/getCurrentContact.js" })
            .then(function (name) {
            return String(name[0]);
        });
    };
    HomePage.prototype.emptyStorage = function () {
        // Confirm alert to avoid deleting accidentally the data
        var confirmAlert = this.alertCtrl.create({
            buttons: [
                {
                    role: "cancel",
                    text: "Cancel",
                },
                {
                    handler: function () {
                        localStorage.clear();
                    },
                    text: "Delete",
                },
            ],
            message: "Are you sure you want to delete all the data?",
            title: "You are going to completly empty the storage",
        });
        confirmAlert.present();
    };
    HomePage = __decorate([
        Object(core["k" /* Component */])({
            selector: "page-home",
            templateUrl: "home.html",
        }),
        __metadata("design:paramtypes", [ionic_angular["f" /* NavController */],
            ionic_angular["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/tabs-menu/tabs-menu.ts
var tabs_menu___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabs_menu___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tabs_menu_TabsPage = /** @class */ (function () {
    function TabsPage(params) {
        this.homePage = home_HomePage;
        this.contactsPage = contacts["a" /* ContactsPage */];
    }
    TabsPage.prototype.getContactName = function () {
        var currName = "";
        var getName = browser.tabs.executeScript(null, { file: "../assets/js/getCurrentContact.js" })
            .then(function (name) {
            console.log("nom: ", name[0]);
            currName = String(name[0]);
        });
        return currName;
    };
    TabsPage = tabs_menu___decorate([
        Object(core["k" /* Component */])({
            selector: "tabs-menu",
            templateUrl: "tabs-menu.html",
        }),
        tabs_menu___metadata("design:paramtypes", [ionic_angular["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-menu.js.map
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = tabs_menu_TabsPage;
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
        app_component___metadata("design:paramtypes", [ionic_angular["h" /* Platform */],
            status_bar["a" /* StatusBar */],
            splash_screen["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// EXTERNAL MODULE: ./src/services/TextAnalysis.service.ts
var TextAnalysis_service = __webpack_require__(56);

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
            bootstrap: [ionic_angular["b" /* IonicApp */]],
            declarations: [
                app_component_MyApp,
                home_HomePage,
                tabs_menu_TabsPage,
            ],
            entryComponents: [
                app_component_MyApp,
                home_HomePage,
                contacts["a" /* ContactsPage */],
                contact_profile["a" /* ContactProfilePage */],
                tabs_menu_TabsPage,
            ],
            imports: [
                platform_browser["a" /* BrowserModule */],
                ionic_angular["d" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: [
                        { loadChildren: '../pages/contacts/contact-profile/contact-profile.module.ngfactory#ContactProfilePageModuleNgFactory', name: 'ContactProfilePage', segment: 'contact-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module.ngfactory#ContactsPageModuleNgFactory', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            providers: [
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                TextAnalysis_service["a" /* TextAnalysisService */],
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(7);

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
function View_MyApp_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(62);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 40, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, 1, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["User options"])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, 1, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrapConversation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](7, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["Get this conversation"])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n            "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n      "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n      "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n                 "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n            "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n            "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](22, 0, null, 1, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_36" /* ɵted */](-1, null, ["Developer options"])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, 1, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.printLocalStorage("conversations") !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](26, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n    Print conversations\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](29, 0, null, 1, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.printLocalStorage("analyses") !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](30, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n    Print analyses\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](33, 0, null, 1, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showTextData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](34, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n    Print text data\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_17" /* ɵeld */](37, 0, null, 1, 2, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.emptyStorage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](38, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n    Empty storage\n  "])), (_l()(), core["_36" /* ɵted */](-1, 1, ["\n\n\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n\n\n"]))], null, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HomePage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */], alert_controller["a" /* AlertController */]], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./src/pages/contacts/contacts.ngfactory.js
var contacts_ngfactory = __webpack_require__(200);

// EXTERNAL MODULE: ./src/pages/contacts/contact-profile/contact-profile.ngfactory.js
var contact_profile_ngfactory = __webpack_require__(199);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.ngfactory.js + 1 modules
var tabs_ngfactory = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tabs.js
var tabs = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/tabs/tab.js
var tab = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(9);

// CONCATENATED MODULE: ./src/pages/tabs-menu/tabs-menu.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_TabsPage = [];
var RenderType_TabsPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_TabsPage, data: {} });

function View_TabsPage_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 9, "ion-tabs", [], null, null, null, tabs_ngfactory["b" /* View_Tabs_0 */], tabs_ngfactory["a" /* RenderType_Tabs */])), core["_32" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [tabs["a" /* Tabs */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, tabs["a" /* Tabs */], [[2, nav_controller["a" /* NavController */]], [2, view_controller["a" /* ViewController */]], app["a" /* App */], config["a" /* Config */], core["p" /* ElementRef */], platform_platform["a" /* Platform */], core["N" /* Renderer */], deep_linker["a" /* DeepLinker */], keyboard["a" /* Keyboard */]], null, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "home"], ["tabTitle", "Home"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](5, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 0, 1, "ion-tab", [["role", "tabpanel"], ["tabIcon", "chatbubbles"], ["tabTitle", "All contacts"]], [[1, "id", 0], [1, "aria-labelledby", 0]], null, null, tab_ngfactory["b" /* View_Tab_0 */], tab_ngfactory["a" /* RenderType_Tab */])), core["_16" /* ɵdid */](8, 245760, null, 0, tab["a" /* Tab */], [tabs["a" /* Tabs */], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], core["i" /* ChangeDetectorRef */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"], tabTitle: [1, "tabTitle"], tabIcon: [2, "tabIcon"] }, null), (_l()(), core["_36" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_36" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.homePage; var currVal_3 = "Home"; var currVal_4 = "home"; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = _co.contactsPage; var currVal_8 = "All contacts"; var currVal_9 = "chatbubbles"; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 5)._tabId; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._btnId; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_5 = core["_29" /* ɵnov */](_v, 8)._tabId; var currVal_6 = core["_29" /* ɵnov */](_v, 8)._btnId; _ck(_v, 7, 0, currVal_5, currVal_6); }); }
function View_TabsPage_Host_0(_l) { return core["_37" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "tabs-menu", [], null, null, null, View_TabsPage_0, RenderType_TabsPage)), core["_16" /* ɵdid */](1, 49152, null, 0, tabs_menu_TabsPage, [nav_params["a" /* NavParams */]], null, null)], null, null); }
var TabsPageNgFactory = core["_13" /* ɵccf */]("tabs-menu", tabs_menu_TabsPage, View_TabsPage_Host_0, {}, {}, []);

//# sourceMappingURL=tabs-menu.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(108);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, HomePageNgFactory, contacts_ngfactory["a" /* ContactsPageNgFactory */], contact_profile_ngfactory["a" /* ContactProfilePageNgFactory */], TabsPageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_33" /* ɵq */], [[3, core["C" /* LOCALE_ID */]]]), core["_26" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_26" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_19" /* ɵi */], []), core["_26" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_27" /* ɵn */], []), core["_26" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_30" /* ɵo */], []), core["_26" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_26" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_26" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["G" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_26" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_26" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_26" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_26" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_26" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["c" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_26" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_26" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_26" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_26" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_26" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_26" /* ɵmpd */](4608, TextAnalysis_service["a" /* TextAnalysisService */], TextAnalysis_service["a" /* TextAnalysisService */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_26" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_26" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_26" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_26" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_26" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_26" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [{ loadChildren: "../pages/contacts/contact-profile/contact-profile.module.ngfactory#ContactProfilePageModuleNgFactory", name: "ContactProfilePage", segment: "contact-profile", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/contacts/contacts.module.ngfactory#ContactsPageModuleNgFactory", name: "ContactsPage", segment: "contacts", priority: "low", defaultHistory: [] }] }, []), core["_26" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_26" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_26" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_26" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_26" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_26" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_26" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_26" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_TextAnalysis_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactProfilePage = /** @class */ (function () {
    function ContactProfilePage(analysis, navParams) {
        this.navParams = navParams;
        this.analysis = analysis;
        this.favouriteEmojis = {
            "out": {},
            "in": {}
        };
    }
    ContactProfilePage.prototype.ngOnInit = function () {
        // Get the name passed when we came from the precedent page
        this.name = this.navParams.get("contactName");
        this.isAnalyzed = false;
        if (JSON.parse(localStorage.getItem("analyses"))) {
            var allAnalyses = JSON.parse(localStorage.getItem("analyses"));
            for (var _i = 0, allAnalyses_1 = allAnalyses; _i < allAnalyses_1.length; _i++) {
                var entry = allAnalyses_1[_i];
                if (entry.name === this.name) {
                    this.favouriteEmojis = {
                        "out": entry.analyses.emoji.emojiIn,
                        "in": entry.analyses.emoji.emojiOut
                    };
                    this.isAnalyzed = true;
                }
            }
        }
    };
    ContactProfilePage.prototype.analyzeContact = function () {
        var emojis = this.analysis.getEmojis(this.name);
        console.log("emojis received in analyseContact", emojis);
        this.favouriteEmojis["out"] = emojis.data["emojiOut"];
        this.favouriteEmojis["in"] = emojis.data["emojiIn"];
        this.analysis.addToStorage(emojis.name, emojis.type, emojis.data, this.isAnalyzed);
        console.log("this.favouriteEmojis", this.favouriteEmojis);
        this.isAnalyzed = true;
        //  Integration of the sentiment analysis
        var testSentiment = this.analysis.sentiment();
        console.log(testSentiment);
    };
    ContactProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: "page-contact-profile",
            templateUrl: "contact-profile.html",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_TextAnalysis_service__["a" /* TextAnalysisService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactProfilePage);
    return ContactProfilePage;
}());

//# sourceMappingURL=contact-profile.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnalysisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__);

var TextAnalysisService = /** @class */ (function () {
    function TextAnalysisService() {
        // If it's the first time we ever run an analysis we add an entry to the localStorage
        if (!JSON.parse(localStorage.getItem("analyses"))) {
            var analyses = [];
            localStorage.setItem("analyses", JSON.stringify(analyses));
        }
    }
    TextAnalysisService.prototype.findConversation = function (contact) {
        var allConversations = JSON.parse(localStorage.getItem("conversations"));
        for (var _i = 0, allConversations_1 = allConversations; _i < allConversations_1.length; _i++) {
            var conversation = allConversations_1[_i];
            if (conversation.hasOwnProperty("name")) {
                if (conversation.name === contact) {
                    return conversation;
                }
            }
        }
    };
    TextAnalysisService.prototype.countEmojis = function (data) {
        var emojiList = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var message = data_1[_i];
            if (message.emojis !== []) {
                for (var _a = 0, _b = message.emojis; _a < _b.length; _a++) {
                    var emoji = _b[_a];
                    var found = false;
                    for (var entry in emojiList) {
                        if (emojiList[entry].character === emoji) {
                            emojiList[entry].occurrence++;
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        emojiList.push({
                            character: emoji,
                            occurrence: 1,
                        });
                    }
                }
            }
        }
        return emojiList;
    };
    TextAnalysisService.prototype.getEmojis = function (contact) {
        var data = this.findConversation(contact);
        var emojiIn = this.countEmojis(data.messages.messagesIn);
        var emojiOut = this.countEmojis(data.messages.messagesOut);
        // Returns all the infomations needed for adding it to localStorage
        return {
            data: {
                emojiIn: emojiIn,
                emojiOut: emojiOut,
            },
            name: contact,
            type: "emoji",
        };
    };
    TextAnalysisService.prototype.addToStorage = function (contactName, type, data, isAnalyzed) {
        // Get all the analyses because we can't directly push something into the localStorage
        var analyses = JSON.parse(localStorage.getItem("analyses"));
        // If it's already analyzed it means it's an update
        // So we have to do it a bit differently
        if (isAnalyzed) {
            console.log("c'est pas nouveau!!");
            for (var _i = 0, analyses_1 = analyses; _i < analyses_1.length; _i++) {
                var contact = analyses_1[_i];
                if (contact.name === contactName) {
                    contact.analyses[type] = data;
                }
            }
        }
        else {
            console.log("c'est nouveau!!");
            analyses.push({
                analyses: (_a = {},
                    _a[type] = data,
                    _a),
                name: contactName,
            });
        }
        // console.log(`analyses`, analyses);
        localStorage.setItem("analyses", JSON.stringify(analyses));
        var _a;
        // console.log(`ce que j'ai ajouté au storage:`, JSON.parse(localStorage.getItem('analyses')));
    };
    TextAnalysisService.prototype.sentiment = function () {
        return __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__("hello, how are you today ?");
    };
    return TextAnalysisService;
}());

//# sourceMappingURL=TextAnalysis.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_profile_contact_profile__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactList = JSON.parse(localStorage.getItem("contactList"));
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ContactsPage");
    };
    ContactsPage.prototype.ionViewWillEnter = function () {
        // Make sure that we have all the contacts displayed
        this.contactList = JSON.parse(localStorage.getItem("contactList"));
    };
    ContactsPage.prototype.onGoToSingleContact = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_profile_contact_profile__["a" /* ContactProfilePage */], { contactName: name });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: "page-contacts",
            templateUrl: "contacts.html",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map