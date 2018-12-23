import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { ContactsPage } from "../contacts/contacts";
import { ContactProfilePage } from "../contacts/contact-profile/contact-profile";


@Component({
  selector: 'tabs-menu',
  templateUrl: 'tabs-menu.html'
})

export class TabsPage {
  homePage = HomePage;
  contactsPage = ContactsPage;
  contactProfilePage = ContactProfilePage;
}
