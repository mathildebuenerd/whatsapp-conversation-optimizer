import { Component } from "@angular/core";
import { IonicPage, NavParams } from "ionic-angular";
import { TextAnalysisService } from "../../../services/TextAnalysis.service";


/**
 * Generated class for the ContactProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contact-profile",
  templateUrl: "contact-profile.html",
})
export class ContactProfilePage {

  name: string;
  data: object;
  isAnalyzed: boolean;
  analysis;

  favouriteEmojis: object;

  constructor(analysis: TextAnalysisService,
              public navParams: NavParams) {
    this.analysis = analysis;
    this.favouriteEmojis = {
      "out": {},
      "in": {}
    };
  }

  ngOnInit() {
    // Get the name passed when we came from the precedent page
    this.name = this.navParams.get("contactName");

    this.isAnalyzed = false;

    if (JSON.parse(localStorage.getItem("analyses"))) {
      const allAnalyses = JSON.parse(localStorage.getItem("analyses"));
      for (const entry of allAnalyses) {
        if (entry.name === this.name) {
          this.favouriteEmojis = {
            "out": entry.analyses.emoji.emojiIn,
            "in": entry.analyses.emoji.emojiOut
          };
          this.isAnalyzed = true;
        }
      }
    }
  }

  analyzeContact() {
    const emojis = this.analysis.getEmojis(this.name);
    console.log(`emojis received in analyseContact`, emojis);
    this.favouriteEmojis["out"] = emojis.data["emojiOut"];
    this.favouriteEmojis["in"] = emojis.data["emojiIn"];

    this.analysis.addToStorage(emojis.name, emojis.type, emojis.data, this.isAnalyzed);

    console.log(`this.favouriteEmojis`, this.favouriteEmojis);
    this.isAnalyzed = true;

  //  Integration of the sentiment analysis
    const testSentiment = this.analysis.sentiment();
    console.log(testSentiment);
  }




}
