import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  scrapConversation() {
    const getContent = browser.tabs.executeScript(null, {file: '../assets/js/content.js'}
      ).then((content) => {
        console.log("promesse réussie");
        console.log(content);
        const contactName = "Amandla";
        this.addConversationToStorage(contactName, content);
        console.log(JSON.parse(localStorage.getItem("conversations")));
        console.log(JSON.parse(localStorage.getItem("Amandla")));
        // console.log(JSON.parse(localStorage.getItem("conversations")));
      }).catch((error) => {
        console.log("promesse échouée", error);
      });
  }

  openAddingForm() {

  }

  addConversationToStorage(contactName, data: object) {
    if (!JSON.parse(localStorage.getItem("conversations"))) {
      localStorage.setItem("conversations", JSON.stringify({}));
    }
    const conversations = JSON.parse(localStorage.getItem("conversations"));
    const newConversation = conversations.contactName = data;
    localStorage.setItem(conversations, JSON.stringify(newConversation));
  }
}
