import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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

  constructor(analysis: TextAnalysisService,
              public navParams: NavParams) {
    // this.name = name;
    // this.data = Object;
    this.analysis = analysis;
    // console.log(`this.analysis`, this.analysis);
  }

  ngOnInit() {
    // Get the name passed when we came from the precedent page
    this.name = this.navParams.get('contactName');
    this.isAnalyzed = false;
    this.favouriteEmojis = {
      "out": {},
      "in": {}
    };
  }

  analyzeContact() {
    const emojis = this.analysis.getEmojis(this.name);
    console.log(`emojis received in analyseContact`, emojis);
    this.favouriteEmojis["out"] = emojis["emojiOut"];
    this.favouriteEmojis["in"] = emojis["emojiIn"];
    console.log(`this.favouriteEmojis`, this.favouriteEmojis);
    this.isAnalyzed = true;
  }




}
