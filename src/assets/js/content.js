(function getContent() {
  return new Promise((resolve, reject) => {

    // Add some custom CSS for the UIs
    addCustomCSS();

    // Get the element that contains all the messages
    // It's an infinite scroll so we have to scroll it until the end in order to get all the messages
    const containerToScroll = document.querySelector(`.copyable-area > div`);

    // Message explaining to the user what's happening
    machineProcessingMessage(`We are getting all the messages...`);

    // We setup a variable to count how many times in a row we are not able to scroll top anymore
    // If it's more than 5 times, it probable means that we have reached the top of the conversation thread
    let counter = 0;
    let isScrollingFinished = false;

    let scrollUntilTop = setInterval(() => {

      console.log(`counter: ${counter}`);
      if (containerToScroll.scrollTop === 0) {
        machineProcessingMessage(`Oh I think we almost have it all! :)`);
        counter++;
      } else {
        // Go at the top of the page
        containerToScroll.scrollTop = 0;
        counter = 0;
      }

      // If the counter is at 7, it means we were not able to scroll top for 14 seconds,
      // So we have probably reached the top
      // But it could also be because the network is slow
      if (counter === 7) {
        console.log(`on a atteint le bout`);
        isScrollingFinished = true;
      }

      if (isScrollingFinished) {
        console.log(`scrolling finished`);
        resolve();
        clearInterval(scrollUntilTop);
      }


    }, 2000);

    function addCustomCSS() {

      let myStyle = document.createElement('style');
      myStyle.setAttribute(`id`, `custom-style`);
      myStyle.type = 'text/css';
      myStyle.innerHTML =
        `.machine-message {
          position: fixed;
          top: 0;
          left: 0;
          padding: 0 30px;
          background-color: #eee;
          width: 100vw;
          height: 10vh;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }
        
        .machine-message p {
          letter-spacing: 2px;
          font: 2em monospace;
          animation: machineMessage 1s ease infinite;
        }
        
        .success-message {
          position: fixed,
          left: 50vw,
          top: 50vh,
          transform: translate(-50%, -50%),
          background: linear-gradient(to bottom right, #4DBCE9, #26ADE4),
          display: inline-flex,
          box-sizing: border-box,
          padding: 30px,
          borderRadius: 3px,
          box-shadow: 5px 5px 10px #9696984d,
          font: 1.5em 'Roboto', sans-serif,
          color: white,
          letter-spacing: 1px,
          animation: temporaryAlert 5s
        }
        
        @keyframes machineMessage {
          0%{opacity: 0;}
          40%{opacity: 1;}
          60%{opacity: 1;}
          100%{opacity: 0;}
        }
        
        @keyframes temporaryAlert {
          0%{opacity: 0; transform: scale(0);}
          20%{opacity: 1; transform: scale(1);}
          80%{opacity: 1; transform: scale(1);}
          100%{opacity: 0; transform: scale(0);}
        }`;
      document.querySelector('head').appendChild(myStyle);

      // Add the tag for the machine messages
      const machineMessage = document.createElement(`div`);
      const machineMessageText = document.createElement(`p`);
      machineMessage.setAttribute(`class`, `machine-message`);
      machineMessage.appendChild(machineMessageText);
      document.body.appendChild(machineMessage);

      //  reduce the height of the whatsapp app to let space for the machine messages
      const app = document.querySelector(`#app`);
      app.style.height = `90vh`;
      app.style.position = `absolute`;
      app.style.bottom = `0`;
      app.style.top = `auto`;

    }

    function machineProcessingMessage(message, add = '') {

      let machineMessage = document.querySelector(`.machine-message p`);

      // Decrease the opacity of the background
      const backgroundToFade = document.querySelector(`.copyable-area > div div:last-child`);
      backgroundToFade.style.opacity = 0.3;

      if (add === '') {
        machineMessage.textContent = message;
      } else if (add === 'add') {
        machineMessage.textContent += ` ${message}`;
      }
    }


  }).then( () => {
    console.log(`deuxième promesse`);

    removeProcessingAnimation();
    showSuccessMessage();

    let messages = getMessages();
    return messages;

    function getEmojis(message) {
      // In whatsapp, the emojis are displayed as an image
      // But the alt text is the unicode character

      let emojis = message.querySelectorAll(`img`);
      let emojiList = [];

      for (const item of emojis) {
        // console.log(`emojis`, emojis);
        // console.log(`item`, item);
        const emoji = item.attributes[`alt`].nodeValue;
        emojiList.push(emoji);
      }


      console.log("emojiList", emojiList);
      return emojiList;



    }
    function getDate(rawDate) {
      // The date looks like this : [10:20, 17/12/2018] Contact Name:
      // So we extract one by one the parameters
      const regHour = /\[(.*?)\:/;
      const regMinute = /\:(.*?)\,/;
      const regDay = /\, (.*?)\//;
      const regMonth = /\/(.*?)\//;
      const regYear = /\/(.{4})\]/;

      return {
        hour: rawDate.match(regHour)[1],
        minute: rawDate.match(regMinute)[1],
        day: rawDate.match(regDay)[1],
        month: rawDate.match(regMonth)[1],
        year: rawDate.match(regYear)[1]
      }
    }

    function getMessages() {

      // return new Promise( (resolve, reject) => {
      // We use div:last-child to avoid getting the messages that are quoted
      const messagesInElements = document.querySelectorAll(`.message-in .copyable-text[data-pre-plain-text] > div:last-child`);
      const messagesOutElements = document.querySelectorAll(`.message-out .copyable-text[data-pre-plain-text] > div:last-child`);

      let messagesIn = [];
      // console.log(`messagesIn`, messagesIn);
      let messagesOut = [];
      // console.log(`messagesOut`, messagesOut);

      console.log(`typeof de messagesIn[0]: ${typeof messagesIn[0]}`);


      for (let i=0; i<messagesInElements.length; i++) {
        messagesIn[i] = {};
        messagesIn[i].text = messagesInElements[i].textContent;
        messagesIn[i].emojis = getEmojis(messagesInElements[i]);
        messagesIn[i].date = {};
        messagesIn[i].date = getDate(messagesInElements[i].parentNode.attributes[`data-pre-plain-text`].nodeValue);
        console.log(`messagesIn[i]`, messagesIn[i]);
        // messagesIn.push(messagesInElements[i].textContent)
      }

      for (let i=0; i<messagesOutElements.length; i++) {
        messagesOut[i] = {};
        messagesOut[i].text = messagesOutElements[i].textContent;
        messagesOut[i].emojis = getEmojis(messagesOutElements[i]);
        messagesOut[i].date = {};
        messagesOut[i].date = getDate(messagesOutElements[i].parentNode.attributes[`data-pre-plain-text`].nodeValue);
        // messagesOut.push(messagesOutElements[i].textContent)
      }

      let allMessages = {
        messagesIn: messagesIn,
        messagesOut: messagesOut
      };
      return allMessages;

      // });
    }
    function removeProcessingAnimation() {
      // Decrease the opacity of the background
      const backgroundToFade = document.querySelector(`.copyable-area > div div:last-child`);
      backgroundToFade.style.opacity = 1;
    }
    function showSuccessMessage() {

      // First de down the opacity of the background
      let app = document.querySelector(`.app-wrapper-web`);
      app.style.opacity = 0.3;

      let successMessage = document.createElement(`div`);
      successMessage.setAttribute(`class`, `success-message`);
      successMessage.textContent = "Perfetto! We got all the messages.";
      document.body.appendChild(successMessage);
    }
  });

})();

