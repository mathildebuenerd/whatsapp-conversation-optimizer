import firebase;

export class FirebaseService {

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAT1QazPWT3EztqWZ8MXl5fCgOPFmHSTws",
      authDomain: "whatsapp-conversation-optimizr.firebaseapp.com",
      databaseURL: "https://whatsapp-conversation-optimizr.firebaseio.com",
      projectId: "whatsapp-conversation-optimizr",
      storageBucket: "whatsapp-conversation-optimizr.appspot.com",
      messagingSenderId: "524424964548"
    });
    console.log(firebase)
  }

}
