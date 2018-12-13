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
      }).catch((error) => {
        console.log("promesse échouée", error);
      });
  }

  openAddingForm() {

  }

  addToStorage() {

  }
}
