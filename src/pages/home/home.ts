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
    // localStorage.removeItem("conversations");
    if (!JSON.parse(localStorage.getItem("conversations"))) {
      console.log("conversations n'existe pas");
      let conversations = [];
      localStorage.setItem('conversations', JSON.stringify(conversations));
    }

    // as we can't "push()" into the localstorage
    // we have to first get all the content, modify it and then add it back to the localstorage
    let conversations = [];
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
  }
}
