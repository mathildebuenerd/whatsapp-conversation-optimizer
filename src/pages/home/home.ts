import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { ContactProfilePage } from "../contacts/contact-profile/contact-profile";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})

export class HomePage {
  currentName: string;
  currentConversation: object;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
    this.currentName = "";

    // If the localStorage is empty, we add "conversations" and "contactList" items
    if (!JSON.parse(localStorage.getItem("conversations"))) {
      const conversations = [];
      localStorage.setItem("conversations", JSON.stringify(conversations));
    }

    if (!JSON.parse(localStorage.getItem("contactList"))) {
      // We also create a contactList array
      const contactList = [];
      localStorage.setItem("contactList", JSON.stringify(contactList));
    }


  }

  scrapConversation(): void {
    const getContent = browser.tabs.executeScript(null, {file: "../assets/js/content.js"}
    ).then((content) => {
      console.log("content", content);
      this.currentConversation = content[0]["messages"];
      this.currentName = content[0]["contactName"];
      this.askForLanguage();
      this.onGoToSingleContact(this.currentName);
    }).catch((error) => {
      console.warn("promesse échouée", error);
    });
  }

  onGoToSingleContact(name: string) {
    this.navCtrl.push(ContactProfilePage, {contactName: name});
  }

  addConversationToStorage(contactName, language) {
    // as we can't "push()" into the localstorage
    // we have to first get all the content, modify it and then add it back to the localstorage
    const conversations = JSON.parse(localStorage.getItem("conversations"));
    // console.log(conversations);

    let isNew = true;


    for (const contact of conversations) {
      if (contact.name === contactName) {
        // If we have already added that contact, we update the already existing entry instead of adding a new one
        contact.language = language;
        contact.messages = this.currentConversation;
        // as the contact was already in the list, we set isNew to false so that it will not be added once again
        isNew = false;
        break;
      }
    }

    if (isNew) {
      // If it's the first time we see that contact, then we add a new entry
      conversations.push({
        language,
        messages: this.currentConversation,
        name: contactName,
      });

      // And we also add it to the contactList
      const contactList = JSON.parse(localStorage.getItem("contactList"));
      contactList.push(contactName);
      localStorage.setItem("contactList", JSON.stringify(contactList));
    }

    localStorage.setItem("conversations", JSON.stringify(conversations));

    this.currentName = "";
    this.currentConversation = {};
  }



  private askForLanguage() {
    console.log("i am gonna ask for language");
    const promptAlert = this.alertCtrl.create({
      buttons: [
        {
          handler: (data) => this.addConversationToStorage(this.currentName, data.language),
          text: "Save conversation",
        },
      ],
      inputs: [
        {
          name: "language",
          placeholder: "en",
          value: "en",
        },
      ],
      message: "What language it is?",
      title: `Add conversation with ${this.currentName}`,
    });
    promptAlert.present();
  }

  printLocalStorage(key) {
    console.log(JSON.parse(localStorage.getItem(key)));
  }

  showTextData(): void {
    this.getContactName().then( (contactName) => {
      // Shows the conversation in a text form so that we can use it for training the LSTM model
      const data = JSON.parse(localStorage.getItem("conversations"));
      let text = "";
      for (const contact of data) {
        if (contact.name === contactName) {
          for (const message of contact.messages.messagesIn) {
            // Because message.emojis is an array, we remove the commas
            const emojis = String(message.emojis).replace(/,/g, "");
            // Add a line break at the end of the sentence
            text += `${message.text} ${emojis} \r`;
          }
        }
      }
    });

  }

  getContactName(): Promise<string> {
    return browser.tabs.executeScript(null, { file: "../assets/js/getCurrentContact.js" })
      .then( (name) => {
        return String(name[0]);
      });
  }


  emptyStorage() {
    // Confirm alert to avoid deleting accidentally the data
    const confirmAlert = this.alertCtrl.create({
      buttons: [
        {
          role: "cancel",
          text: "Cancel",
        },
        {
          handler: () => {
            localStorage.clear();
          },
          text: "Delete",
        },
      ],
      message: "Are you sure you want to delete all the data?",
      title: "You are going to completly empty the storage",
    });
    confirmAlert.present();
  }
}
