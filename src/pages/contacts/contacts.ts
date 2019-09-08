import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ContactProfilePage } from "./contact-profile/contact-profile";

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contacts",
  templateUrl: "contacts.html",
})
export class ContactsPage {

  contactList: string[] = JSON.parse(localStorage.getItem("contactList"));

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactsPage");
  }

  ionViewWillEnter() {
    // Make sure that we have all the contacts displayed
    this.contactList = JSON.parse(localStorage.getItem("contactList"));
  }

  onGoToSingleContact(name: string) {
    this.navCtrl.push(ContactProfilePage, {contactName: name});
  }

}
