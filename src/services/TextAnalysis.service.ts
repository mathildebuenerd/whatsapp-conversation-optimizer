import {type} from "os";

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
          console.log(`message.emojis`, message.emojis);
          console.log(`emoji`, emoji);
          emojiList.push(emoji);
        }
      }
    }
    return emojiList;
  }

  getEmojis(contact: string) {

    const data = this.findConversation(contact);
    console.log(`data in getEmojis:`, data);
    console.log(data.messages);
    const emojiIn = this.countEmojis(data.messages[0].messagesIn);
    const emojiOut = this.countEmojis(data.messages[0].messagesOut);



    // const contactConversation = allConversations.get

    return {
      emojiIn,
      emojiOut
    }
  }

}
