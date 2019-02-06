import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { ContactsPage } from "../contacts/contacts";
import { ContactProfilePage } from "../contacts/contact-profile/contact-profile";
import { NavParams } from "ionic-angular";


@Component({
  selector: 'tabs-menu',
  templateUrl: 'tabs-menu.html'
})

export class TabsPage {
  private params: NavParams;
  // private contactName: any;
  contactName: string;


  constructor(params?: NavParams) {
    this.getContactName();
  }

  getContactName(): void {
    const name = browser.tabs.executeScript(null, {file: '../assets/js/getCurrentContact.js'})
      .then( (name) => {
        console.log(`nom: `, name[0]);
        this.contactName = String(name[0]);
      });
  }

  homePage = HomePage;
  contactsPage = ContactsPage;
  contactProfilePage = ContactProfilePage;
}
