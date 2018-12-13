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
        `.machineMessage {
          content: attr(data-before);
          padding: 30px;
          letter-spacing: 2px;
          font: 2em monospace;
          animation: processing 1s ease infinite;
          position:fixed;
          z-index: 10;
        }
        
        @keyframes processing {
          0%{opacity: 0;}
          50%{opacity: 1;}
          100%{opacity: 0;}
        }
        
        @keyframes temporaryAlert {
          0%{opacity: 0; transform: scale(0);}
          20%{opacity: 1; transform: scale(1);}
          80%{opacity: 1; transform: scale(1);}
          100%{opacity: 0; transform: scale(0);}
        }`;
      document.querySelector('head').appendChild(myStyle);

    }

    function machineProcessingMessage(message, add = '') {

      let machineMessage;

      if (!document.querySelector(`.machineMessage`)) {
        machineMessage = document.createElement(`div`);
        machineMessage.setAttribute(`class`, `machineMessage`);
      } else {
        machineMessage = document.querySelector(`.machineMessage`);
      }

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

    function getMessages() {

      // return new Promise( (resolve, reject) => {
        const messagesInElements = document.querySelectorAll(`.message-in .selectable-text`);
        const messagesOutElements = document.querySelectorAll(`.message-out .selectable-text`);

        let messagesIn = [];
        // console.log(`messagesIn`, messagesIn);
        let messagesOut = [];
        // console.log(`messagesOut`, messagesOut);


        for (let i=0; i<messagesInElements.length; i++) {
          messagesIn.push(messagesInElements[i].textContent)
        }

        for (let i=0; i<messagesOutElements.length; i++) {
          messagesOut.push(messagesOutElements[i].textContent)
        }

          let allMessages = {
            messagesIn: messagesIn,
            messagesOut: messagesOut
          };
           return allMessages;

      // });
    }
    function removeProcessingAnimation() {
      const containerToScroll = document.querySelector(`.copyable-area > div`);
      containerToScroll.removeAttribute(`style`);
      let processingAnimation = document.getElementById(`custom-style`);
      processingAnimation.parentNode.removeChild(processingAnimation);
    }
    function showSuccessMessage() {

      // First de down the opacity of the background
      let app = document.querySelector(`.app-wrapper-web`);
      app.style.opacity = 0.3;

      let successMessage = document.createElement(`div`);
      successMessage.setAttribute(`id`, `success-message`);
      successMessage.textContent = "Perfetto! We got all the messages.";
      Object.assign(
        successMessage.style,
        {
          position: "fixed",
          left: "50vw",
          top: "50vh",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to bottom right, #4DBCE9, #26ADE4)",
          display: "inline-flex",
          boxSizing: "border-box",
          padding: "30px",
          borderRadius: "3px",
          boxShadow: "5px 5px 10px #9696984d",
          font: "1.5em 'Roboto', sans-serif",
          color: "white",
          letterSpacing: "1px",
          animation: "temporaryAlert 5s"
        });
      document.body.appendChild(successMessage);
    }
  });

})();

