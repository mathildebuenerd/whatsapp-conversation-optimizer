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
    this.currentName = "";
    this.askForName = false;
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

  addConversationToStorage(contactName: string, data: Object) {
    if (!JSON.parse(localStorage.getItem("conversations"))) {
      localStorage.setItem("conversations", JSON.stringify({}));
    }
    const newConversation: Object = {contactName: data};
    localStorage.setItem("conversations", JSON.stringify(newConversation));
    console.log(JSON.parse(localStorage.getItem("conversations")));
  }
}
