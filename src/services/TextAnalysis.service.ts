import * as sent from 'node-sentiment-jouska';

export class TextAnalysisService {

  constructor() {
    console.log("constructor TextAnalysisService");

    // If it's the first time we ever run an analysis we add an entry to the localStorage
    if (!JSON.parse(localStorage.getItem('analyses'))) {
      let analyses = [];
      localStorage.setItem('analyses', JSON.stringify(analyses));
    }

  }

  findConversation(contact: string) {
    const allConversations = JSON.parse(localStorage.getItem("conversations"));
    for (const conversation of allConversations) {
      if (conversation.hasOwnProperty("name")) {
        if (conversation.name == contact) {
          return conversation;
        }
      }
    }
  }

  countEmojis(data) {
    let emojiList = [];
    // console.log(`data:`, data);
    // console.log(`typeof data: ${typeof data}`);
    for (const message of data) {
      // console.log(`message:`, message);
      if (message.emojis !== []) {
        for (const emoji of message.emojis) {
          let found = false;
          for (const entry in emojiList) {
            if (emojiList[entry].character === emoji) {
              emojiList[entry].occurrence++;
              found = true;
              break;
            }
          }
          if (!found) {
            emojiList.push(
              {
                character: emoji,
                occurrence: 1
              });
          }

          // console.log(`message.emojis`, message.emojis);
          // console.log(`emoji`, emoji);

        }
      }
    }
    // console.log(`emojiList`, emojiList);
    return emojiList;
  }

  getEmojis(contact: string) {

    const data = this.findConversation(contact);
    console.log(`data in getEmojis:`, data);
    // console.log(data.messages);
    const emojiIn = this.countEmojis(data.messages.messagesIn);
    const emojiOut = this.countEmojis(data.messages.messagesOut);

    // Returns all the infomations needed for adding it to localStorage
    return {
      name: contact,
      type: 'emoji',
      data: {
        emojiIn,
        emojiOut
      }
    }
  }

  addToStorage(contactName: string, type: string, data: Object, isAnalyzed: boolean) {

    console.log(`j'ajoute au storage`);

    // Get all the analyses because we can't directly push something into the localStorage
    let analyses = JSON.parse(localStorage.getItem('analyses'));

    // If it's already analyzed it means it's an update
    // So we have to do it a bit differently
    if (isAnalyzed) {
      console.log(`c'est pas nouveau!!`);
      for (const contact of analyses) {
        if (contact.name == contactName) {
          contact.analyses[type] = data;
        }
      }
    } else {
      console.log(`c'est nouveau!!`);
      analyses.push({
        name: contactName,
        analyses: {
          [type]: data
        }
      });
    }

    // console.log(`analyses`, analyses);
    localStorage.setItem('analyses', JSON.stringify(analyses));
    // console.log(`ce que j'ai ajouté au storage:`, JSON.parse(localStorage.getItem('analyses')));
  }

  sentiment() {
    console.log(`sent:`, sent);
    return sent('hello, how are you today ?');
  }

}
