import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TextAnalysisService } from "../../../services/TextAnalysis.service";


/**
 * Generated class for the ContactProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-profile',
  templateUrl: 'contact-profile.html',
})
export class ContactProfilePage {

  name: string;
  data: Object;
  isAnalyzed: boolean;
  analysis;

  favouriteEmojis: Object;

  constructor(analysis: TextAnalysisService) {
    // this.name = name;
    // this.data = Object;
    this.isAnalyzed = false;
    this.analysis = analysis;
    this.favouriteEmojis = {
      "out": {},
      "in": {}
    };

    console.log(`this.analysis`, this.analysis);
  }

  analyzeContact() {
    const emojis = this.analysis.getEmojis("Mezzo");
    console.log(`emojis received in analyseContact`, emojis);
    this.favouriteEmojis["out"] = emojis["emojiOut"];
    this.favouriteEmojis["in"] = emojis["emojiIn"];
    console.log(`this.favouriteEmojis`, this.favouriteEmojis);
    this.isAnalyzed = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactProfilePage');
  }


}
