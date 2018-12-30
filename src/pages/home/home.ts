import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentName: string;
  currentConversation: Object;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
    this.currentName = '';
    // localStorage.removeItem("conversations");
    console.log(`conversations localStorage:`, JSON.parse(localStorage.getItem("conversations")));
  }

  scrapConversation(): void {
    const getContent = browser.tabs.executeScript(null, {file: '../assets/js/content.js'}
    ).then((content) => {
      console.log("promesse réussie");
      console.log(content);

      this.currentConversation = content;
      this.askForName();

      // console.log(JSON.parse(localStorage.getItem("conversations")));
      // console.log(JSON.parse(localStorage.getItem("conversations")));
    }).catch((error) => {
      console.log("promesse échouée", error);
    });
  }

  openAddContactForm() {

  }

  addConversationToStorage(contactName, language) {
    let conversations;
    let contactList;
    if (!JSON.parse(localStorage.getItem("conversations"))) {
      console.log("conversations n'existe pas");
      conversations = [];
      localStorage.setItem('conversations', JSON.stringify(conversations));
    }

    if (!JSON.parse(localStorage.getItem("contactList"))) {
      // We also create a contactList array
      contactList = [];
      localStorage.setItem('contactList', JSON.stringify(contactList));
    }


    // as we can't "push()" into the localstorage
    // we have to first get all the content, modify it and then add it back to the localstorage
    conversations = JSON.parse(localStorage.getItem('conversations'));
    // console.log(conversations);

    for (const contact of conversations) {
      if (contact[name] === contactName) {
        // If we have already added that contact, we remove it before adding it again
        // In order to avoid duplication
        conversations.pop(contact);
        break;
      }
    }
    conversations.push({
      name: contactName,
      language: language,
      messages: this.currentConversation
    });

    contactList = JSON.parse(localStorage.getItem('contactList'));
    contactList.push(contactName);

    localStorage.setItem("conversations", JSON.stringify(conversations));
    localStorage.setItem('contactList', JSON.stringify(contactList));
    console.log(JSON.parse(localStorage.getItem("conversations")));


    // this.currentName = "";
    this.currentConversation = "";
  }



  private askForName() {
    const promptAlert = this.alertCtrl.create({
      title: 'Remember that conversation',
      message: 'Enter contact name and language of the conversation',
      inputs: [
        {
          name: 'contact-name',
          placeholder: 'Julien'
        },
        {
          name: 'language',
          placeholder: `enter the code, eg 'en' for english`,
          value: 'en'
        }
      ],
      buttons: [
        {
          text: 'Save conversation',
          handler: data => {
            console.log(`data:`, data);
            // this.currentName = data['contact-name'];
            this.addConversationToStorage(data['contact-name'], data['language']);
          }
        }
      ]
    });
    promptAlert.present();
  }

  printLocalStorage(key) {
    console.log(JSON.parse(localStorage.getItem(key)));
  }
  emptyStorage() {
    // Confirm alert to avoid deleting accidentally the data
    let confirmAlert = this.alertCtrl.create({
      title: 'You are going to completly empty the storage',
      message: 'Are you sure you want to delete all the data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            localStorage.clear();
          }
        }
      ]
    });
    confirmAlert.present();
  }
}
