export class TextAnalysisService {

  constructor() {
    console.log("constructor TextAnalysisService");

  }

  findConversation(contact: string) {
    const allConversations = JSON.parse(localStorage.getItem("conversations"));
    for (const conversation of allConversations) {
      if (conversation.hasOwnProperty("name")) {
        if (conversation.name === contact) {
          return conversation;
        }
      }
    }
  }

  countEmojis(data) {
    let emojiList = [];
    console.log(`data:`, data);
    console.log(`typeof data: ${typeof data}`);
    for (const message of data) {
      console.log(`message:`, message);
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

          console.log(`message.emojis`, message.emojis);
          console.log(`emoji`, emoji);

        }
      }
    }
    console.log(`emojiList`, emojiList);
    return emojiList;
  }

  getEmojis(contact: string) {

    const data = this.findConversation(contact);
    console.log(`data in getEmojis:`, data);
    console.log(data.messages);
    const emojiIn = this.countEmojis(data.messages[0].messagesIn);
    const emojiOut = this.countEmojis(data.messages[0].messagesOut);

    // const contactConversation = allConversations.get

    this.addToStorage(contact, "emojis", {emojiIn, emojiOut});

    return {
      emojiIn,
      emojiOut
    }
  }

  addToStorage(contactName: string, type: string, data: Object) {

    console.log(`j'ajoute au storage`);

    let analyses;

    if (!JSON.parse(localStorage.getItem('analyses'))) {
      analyses = [];
      localStorage.setItem('analyses', JSON.stringify(analyses));
    }

    analyses = JSON.parse(localStorage.getItem('analyses'));
    analyses.push({
      name: contactName,
      analyses: {
        [type]: data
      }
    });

    console.log(`analyses`, analyses);
    localStorage.setItem('analyses', JSON.stringify(analyses));
    console.log(`ce que j'ai ajouté au storage:`, JSON.parse(localStorage.getItem('analyses')));
  }

}
