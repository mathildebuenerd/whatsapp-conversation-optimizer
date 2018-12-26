import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentName: string;
  currentConversation: Object;
  askForName: boolean;

  constructor(public navCtrl: NavController) {
    this.currentName = '';
    this.askForName = false;
    // localStorage.removeItem("conversations");
    console.log(`conversations localStorage:`, JSON.parse(localStorage.getItem("conversations")));
  }

  scrapConversation(): void {
    const getContent = browser.tabs.executeScript(null, {file: '../assets/js/content.js'}
    ).then((content) => {
      console.log("promesse réussie");
      console.log(content);

      this.askForName = true;
      this.currentConversation = content;

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
    this.askForName = false;
  }
}
