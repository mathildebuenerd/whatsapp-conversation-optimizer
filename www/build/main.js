webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnalysisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__);

var TextAnalysisService = /** @class */ (function () {
    function TextAnalysisService() {
        console.log("constructor TextAnalysisService");
        // If it's the first time we ever run an analysis we add an entry to the localStorage
        if (!JSON.parse(localStorage.getItem('analyses'))) {
            var analyses = [];
            localStorage.setItem('analyses', JSON.stringify(analyses));
        }
    }
    TextAnalysisService.prototype.findConversation = function (contact) {
        var allConversations = JSON.parse(localStorage.getItem("conversations"));
        for (var _i = 0, allConversations_1 = allConversations; _i < allConversations_1.length; _i++) {
            var conversation = allConversations_1[_i];
            if (conversation.hasOwnProperty("name")) {
                if (conversation.name == contact) {
                    return conversation;
                }
            }
        }
    };
    TextAnalysisService.prototype.countEmojis = function (data) {
        var emojiList = [];
        // console.log(`data:`, data);
        // console.log(`typeof data: ${typeof data}`);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var message = data_1[_i];
            // console.log(`message:`, message);
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
                            occurrence: 1
                        });
                    }
                    // console.log(`message.emojis`, message.emojis);
                    // console.log(`emoji`, emoji);
                }
            }
        }
        // console.log(`emojiList`, emojiList);
        return emojiList;
    };
    TextAnalysisService.prototype.getEmojis = function (contact) {
        var data = this.findConversation(contact);
        console.log("data in getEmojis:", data);
        // console.log(data.messages);
        var emojiIn = this.countEmojis(data.messages.messagesIn);
        var emojiOut = this.countEmojis(data.messages.messagesOut);
        // Returns all the infomations needed for adding it to localStorage
        return {
            name: contact,
            type: 'emoji',
            data: {
                emojiIn: emojiIn,
                emojiOut: emojiOut
            }
        };
    };
    TextAnalysisService.prototype.addToStorage = function (contactName, type, data, isAnalyzed) {
        console.log("j'ajoute au storage");
        // Get all the analyses because we can't directly push something into the localStorage
        var analyses = JSON.parse(localStorage.getItem('analyses'));
        // If it's already analyzed it means it's an update
        // So we have to do it a bit differently
        if (isAnalyzed) {
            console.log("c'est pas nouveau!!");
            for (var _i = 0, analyses_1 = analyses; _i < analyses_1.length; _i++) {
                var contact = analyses_1[_i];
                if (contact.name == contactName) {
                    contact.analyses[type] = data;
                }
            }
        }
        else {
            console.log("c'est nouveau!!");
            analyses.push({
                name: contactName,
                analyses: (_a = {},
                    _a[type] = data,
                    _a)
            });
        }
        // console.log(`analyses`, analyses);
        localStorage.setItem('analyses', JSON.stringify(analyses));
        var _a;
        // console.log(`ce que j'ai ajouté au storage:`, JSON.parse(localStorage.getItem('analyses')));
    };
    TextAnalysisService.prototype.sentiment = function () {
        console.log("sent:", __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__);
        return __WEBPACK_IMPORTED_MODULE_0_node_sentiment_jouska__('hello, how are you today ?');
    };
    return TextAnalysisService;
}());

//# sourceMappingURL=TextAnalysis.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_profile_contact_profile__ = __webpack_require__(40);
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
        this.contactList = JSON.parse(localStorage.getItem('contactList'));
        // this.contactList = JSON.parse(localStorage.getItem('contactList'));
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.ionViewWillEnter = function () {
        // Make sure that we have all the contacts displayed
        this.contactList = JSON.parse(localStorage.getItem('contactList'));
    };
    ContactsPage.prototype.onGoToSingleContact = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_profile_contact_profile__["a" /* ContactProfilePage */], { contactName: name });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\contacts\contacts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>All contacts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let contact of contactList"\n              (click)="onGoToSingleContact(contact)">\n      {{ contact }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contacts/contact-profile/contact-profile.module": [
		282,
		1
	],
	"../pages/contacts/contacts.module": [
		283,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contact_profile_contact_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(params) {
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.contactsPage = __WEBPACK_IMPORTED_MODULE_2__contacts_contacts__["a" /* ContactsPage */];
        this.contactProfilePage = __WEBPACK_IMPORTED_MODULE_3__contacts_contact_profile_contact_profile__["a" /* ContactProfilePage */];
        this.contactName = this.getContactName();
    }
    TabsPage.prototype.getContactName = function () {
        var currName = "";
        var name = browser.tabs.executeScript(null, { file: '../assets/js/getCurrentContact.js' })
            .then(function (name) {
            console.log("nom: ", name[0]);
            currName = String(name[0]);
        });
        return currName;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs-menu',template:/*ion-inline-start:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\tabs-menu\tabs-menu.html"*/'<ion-tabs>\n  <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="contactProfilePage" [tabTitle]="contactName" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="contactsPage" tabTitle="All contacts" tabIcon="chatbubbles"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\tabs-menu\tabs-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-menu.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contact_profile_contact_profile__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.currentName = '';
        // If the localStorage is empty, we add "conversations" and "contactList" items
        if (!JSON.parse(localStorage.getItem("conversations"))) {
            // console.log("conversations n'existe pas");
            var conversations = [];
            localStorage.setItem('conversations', JSON.stringify(conversations));
        }
        if (!JSON.parse(localStorage.getItem("contactList"))) {
            // We also create a contactList array
            var contactList = [];
            localStorage.setItem('contactList', JSON.stringify(contactList));
        }
    }
    HomePage.prototype.scrapConversation = function () {
        var _this = this;
        var getContent = browser.tabs.executeScript(null, { file: '../assets/js/content.js' }).then(function (content) {
            console.log("promesse réussie");
            console.log(content);
            _this.currentConversation = content[0]["messages"];
            _this.currentName = content[0]["contactName"];
            console.log("j'ai re\u00E7u comme content de la promesse:", content, content["messages"], content["contactName"]);
            _this.askForLanguage();
            _this.onGoToSingleContact(_this.currentName);
            // console.log(JSON.parse(localStorage.getItem("conversations")));
            // console.log(JSON.parse(localStorage.getItem("conversations")));
        }).catch(function (error) {
            console.warn("promesse échouée", error);
        });
    };
    HomePage.prototype.openAddContactForm = function () {
    };
    HomePage.prototype.onGoToSingleContact = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contacts_contact_profile_contact_profile__["a" /* ContactProfilePage */], { contactName: name });
    };
    HomePage.prototype.addConversationToStorage = function (contactName, language) {
        // as we can't "push()" into the localstorage
        // we have to first get all the content, modify it and then add it back to the localstorage
        var conversations = JSON.parse(localStorage.getItem('conversations'));
        // console.log(conversations);
        var isNew = true;
        for (var _i = 0, conversations_1 = conversations; _i < conversations_1.length; _i++) {
            var contact = conversations_1[_i];
            if (contact.name == contactName) {
                // If we have already added that contact, we update the already existing entry instead of adding a new one
                contact.language = language;
                contact.messages = this.currentConversation;
                isNew = false; // as the contact was already in the list, we set isNew to false so that it will not be added once again
                break;
            }
        }
        if (isNew) {
            // If it's the first time we see that contact, then we add a new entry
            conversations.push({
                name: contactName,
                language: language,
                messages: this.currentConversation
            });
            // And we also add it to the contactList
            var contactList = JSON.parse(localStorage.getItem('contactList'));
            contactList.push(contactName);
            localStorage.setItem('contactList', JSON.stringify(contactList));
        }
        localStorage.setItem("conversations", JSON.stringify(conversations));
        console.log(JSON.parse(localStorage.getItem("conversations")));
        this.currentName = "";
        this.currentConversation = "";
    };
    HomePage.prototype.askForLanguage = function () {
        var _this = this;
        var promptAlert = this.alertCtrl.create({
            title: "Add conversation with " + this.currentName,
            message: 'What language it is?',
            inputs: [
                {
                    name: 'language',
                    placeholder: "en",
                    value: 'en'
                }
            ],
            buttons: [
                {
                    text: 'Save conversation',
                    handler: function (data) {
                        // console.log(`data:`, data);
                        // this.currentName = data['contact-name'];
                        _this.addConversationToStorage(_this.currentName, data['language']);
                    }
                }
            ]
        });
        promptAlert.present();
    };
    HomePage.prototype.printLocalStorage = function (key) {
        console.log(JSON.parse(localStorage.getItem(key)));
    };
    HomePage.prototype.showTextData = function () {
        this.getContactName().then(function (contactName) {
            console.log("contact name", contactName);
            // Shows the conversation in a text form so that we can use it for training the LSTM model
            var data = JSON.parse(localStorage.getItem("conversations"));
            var text = "";
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var contact = data_1[_i];
                if (contact.name === contactName) {
                    for (var _a = 0, _b = contact.messages.messagesIn; _a < _b.length; _a++) {
                        var message = _b[_a];
                        // Because message.emojis is an array, we remove the commas
                        var emojis = String(message.emojis).replace(/,/g, '');
                        // Add a line break at the end of the sentence
                        text += message.text + " " + emojis + " \r";
                    }
                }
            }
            console.log(text);
        });
    };
    HomePage.prototype.getContactName = function () {
        return browser.tabs.executeScript(null, { file: '../assets/js/getCurrentContact.js' })
            .then(function (name) {
            console.log("nom: ", name[0]);
            return String(name[0]);
        });
    };
    HomePage.prototype.emptyStorage = function () {
        // Confirm alert to avoid deleting accidentally the data
        var confirmAlert = this.alertCtrl.create({
            title: 'You are going to completly empty the storage',
            message: 'Are you sure you want to delete all the data?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        localStorage.clear();
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\home\home.html"*/'<ion-content padding>\n\n  <h2>User options</h2>\n    <button ion-button\n            (click)="scrapConversation()">Get this conversation</button>\n\n  <!--<ion-card padding-->\n            <!--*ngIf="askForName">-->\n    <!--<ion-card-title>Remember that conversation</ion-card-title>-->\n    <!--<ion-item>-->\n      <!--<ion-label stacked>Contact Name</ion-label>-->\n      <!--<ion-input type="text"-->\n                 <!--[(ngModel)]="this.currentName"></ion-input>-->\n    <!--</ion-item>-->\n    <!--<button ion-button-->\n            <!--[disabled]="this.currentName === \'\'"-->\n            <!--(click)="addConversationToStorage()">Add to storage</button>-->\n  <!--</ion-card>-->\n\n  <h2>Developer options</h2>\n  <button ion-button\n          (click)="printLocalStorage(\'conversations\')">\n    Print conversations\n  </button>\n  <button ion-button\n          (click)="printLocalStorage(\'analyses\')">\n    Print analyses\n  </button>\n\n  <button ion-button\n          (click)="showTextData()">\n    Print text data\n  </button>\n\n  <button ion-button\n          (click)="emptyStorage()">\n    Empty storage\n  </button>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contacts_contacts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contact_profile_contact_profile__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_menu_tabs_menu__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_TextAnalysis_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                // ContactsPage,
                // ContactProfilePage,
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_menu_tabs_menu__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contacts/contact-profile/contact-profile.module#ContactProfilePageModule', name: 'ContactProfilePage', segment: 'contact-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contact_profile_contact_profile__["a" /* ContactProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_menu_tabs_menu__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_TextAnalysis_service__["a" /* TextAnalysisService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_menu_tabs_menu__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_menu_tabs_menu__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_TextAnalysis_service__ = __webpack_require__(100);
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
    // contactName: string;
    function ContactProfilePage(analysis, navParams) {
        // this.name = name;
        // this.data = Object;
        this.navParams = navParams;
        // this.params = params;
        // console.log(this.params); // returns NavParams {data: Object}
        // this.contactName = navParams.data.contactName;
        console.log("navParams de contact profile: ", navParams);
        this.analysis = analysis;
        this.favouriteEmojis = {
            "out": {},
            "in": {}
        };
        // console.log(`this.analysis`, this.analysis);
    }
    ContactProfilePage.prototype.ngOnInit = function () {
        // Get the name passed when we came from the precedent page
        this.name = this.navParams.get('contactName');
        this.isAnalyzed = false;
        if (JSON.parse(localStorage.getItem('analyses'))) {
            var allAnalyses = JSON.parse(localStorage.getItem('analyses'));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-profile',template:/*ion-inline-start:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\contacts\contact-profile\contact-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle="left">\n      <ion-icon name="menu">Return to contact list</ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-title>{{ this.name }}</ion-title>\n\n  <div>\n    <button ion-button\n            *ngIf="!isAnalyzed"\n            (click)="analyzeContact()">Analyze contact</button>\n\n    <button ion-button\n            *ngIf="isAnalyzed"\n            (click)="analyzeContact()">Update contact analysis</button>\n  </div>\n\n  <ion-card *ngIf="isAnalyzed">\n    <ion-card-title padding>Favourite emojis</ion-card-title>\n    <div class="container" padding>\n      <h3>Sent</h3>\n      <div class="emoji-list">\n        <span class="emoji"\n              *ngFor="let emoji of favouriteEmojis[\'out\']"\n              [attr.data-occurrence]="emoji.occurrence">\n          <span class="emoji-character">{{ emoji.character }}</span>\n          <span class="emoji-occurrence">{{ emoji.occurrence }}</span>\n        </span>\n      </div> <!-- emoji-list -->\n    </div> <!-- container -->\n\n    <div class="container" padding>\n      <h3>Received</h3>\n      <div class="emoji-list">\n        <span class="emoji"\n              *ngFor="let emoji of favouriteEmojis[\'in\']"\n              [attr.data-occurrence]="emoji.occurrence">\n          <span class="emoji-character">{{ emoji.character }}</span>\n          <span class="emoji-occurrence">{{ emoji.occurrence }}</span>\n        </span>\n      </div> <!-- emoji-list -->\n    </div> <!-- container -->\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"H:\WebstormProjects\whatsapp-conversation-optimizer\src\pages\contacts\contact-profile\contact-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_TextAnalysis_service__["a" /* TextAnalysisService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactProfilePage);
    return ContactProfilePage;
}());

//# sourceMappingURL=contact-profile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map