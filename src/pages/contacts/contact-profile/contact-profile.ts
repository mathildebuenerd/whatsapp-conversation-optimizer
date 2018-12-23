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

  favouriteEmojis: Array<string>;

  constructor(analysis: TextAnalysisService) {
    // this.name = name;
    // this.data = Object;
    this.isAnalyzed = false;
    this.analysis = analysis;

    console.log(`this.analysis`, this.analysis);



  }

  analyzeContact() {
    this.analysis.getEmojis("Mezzo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactProfilePage');
  }


}
