export class TextAnalysisService {

  constructor() {
    console.log("constructor TextAnalysisService");

  }

  getEmojis(contact: string): Object {

    const allConversations = JSON.parse(localStorage.getItem("conversations"));
    console.log(`allConversations`, allConversations);
    // const contactConversation = allConversations.get

    return {
      emojisIn: [],
      emojisOut: []
    }
  }

}
