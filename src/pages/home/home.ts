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

  addConversationToStorage() {
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
    conversations.push({
      name: this.currentName,
      messages: this.currentConversation
    });

    contactList = JSON.parse(localStorage.getItem('contactList'));
    contactList.push(this.currentName);

    localStorage.setItem("conversations", JSON.stringify(conversations));
    localStorage.setItem('contactList', JSON.stringify(contactList));
    console.log(JSON.parse(localStorage.getItem("conversations")));


    this.currentName = "";
    this.currentConversation = "";
  }

  printLocalStorage(key) {
    console.log(JSON.parse(localStorage.getItem(key)));
  }

  private askForName() {
    const promptAlert = this.alertCtrl.create({
      title: 'Remember that conversation',
      message: 'Enter contact name',
      inputs: [
        {
          name: 'contact-name',
          placeholder: 'Julien'
        }
      ],
      buttons: [
        {
          text: 'Save conversation',
          handler: data => {
            console.log(`data:`, data);
            this.currentName = data['contact-name'];
            this.addConversationToStorage();
          }
        }
      ]
    });
    promptAlert.present();
  }
}
