import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { ContactsPage } from "../contacts/contacts";
import { HomePage } from "../home/home";

@Component({
  selector: "tabs-menu",
  templateUrl: "tabs-menu.html",
})

export class TabsPage {
  private params: NavParams;
  contactName: string;


  constructor(params?: NavParams) {
  }

  getContactName(): string {
    let currName = "";
    const getName = browser.tabs.executeScript(null, {file: "../assets/js/getCurrentContact.js"})
      .then( (name) => {
        console.log(`nom: `, name[0]);
        currName = String(name[0]);
      });
    return currName;
  }
  homePage = HomePage;
  contactsPage = ContactsPage;
}
