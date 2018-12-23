import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactProfilePage } from './contact-profile';
import { TextAnalysisService } from "../../../services/TextAnalysis.service";


@NgModule({
  declarations: [
    ContactProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactProfilePage),
  ],
  providers: [
    TextAnalysisService
  ]
})
export class ContactProfilePageModule {}
