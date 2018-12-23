webpackJsonp([1],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(52);

// EXTERNAL MODULE: ./src/pages/contacts/contact-profile/contact-profile.ts
var contact_profile = __webpack_require__(82);

// EXTERNAL MODULE: ./src/services/TextAnalysis.service.ts
var TextAnalysis_service = __webpack_require__(53);

// CONCATENATED MODULE: ./src/pages/contacts/contact-profile/contact-profile.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var contact_profile_module_ContactProfilePageModule = /** @class */ (function () {
    function ContactProfilePageModule() {
    }
    ContactProfilePageModule = __decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                contact_profile["a" /* ContactProfilePage */],
            ],
            imports: [
                ionic_angular["d" /* IonicPageModule */].forChild(contact_profile["a" /* ContactProfilePage */]),
            ],
            providers: [
                TextAnalysis_service["a" /* TextAnalysisService */]
            ]
        })
    ], ContactProfilePageModule);
    return ContactProfilePageModule;
}());

//# sourceMappingURL=contact-profile.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(196);

// EXTERNAL MODULE: ./src/pages/contacts/contact-profile/contact-profile.ngfactory.js
var contact_profile_ngfactory = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(37);

// CONCATENATED MODULE: ./src/pages/contacts/contact-profile/contact-profile.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactProfilePageModuleNgFactory", function() { return ContactProfilePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var ContactProfilePageModuleNgFactory = core["_14" /* ɵcmf */](contact_profile_module_ContactProfilePageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], contact_profile_ngfactory["a" /* ContactProfilePageNgFactory */]]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, TextAnalysis_service["a" /* TextAnalysisService */], TextAnalysis_service["a" /* TextAnalysisService */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, contact_profile_module_ContactProfilePageModule, contact_profile_module_ContactProfilePageModule, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], contact_profile["a" /* ContactProfilePage */], [])]); });

//# sourceMappingURL=contact-profile.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=1.js.map