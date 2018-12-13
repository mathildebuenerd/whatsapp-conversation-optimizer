(function getContent() {
  return new Promise((resolve, reject) => {

    const containerToScroll = document.querySelector(`.copyable-area > div`);
    containerToScroll.style.opacity = 0.5;

    // Add some CSS properties to show a feedback the user when the messages are processed
    addProcessingAnimation();

    // We setup a variable to count how many times in a row we are not able to scroll top anymore
    // If it's more than 5 times, it probable means that we have reached the top of the conversation thread
    let counter = 0;
    let isScrollingFinished = false;

    let scrollUntilTop = setInterval(() => {

      console.log(`counter: ${counter}`);

      if (containerToScroll.scrollTop === 0) {
        counter++;
      } else {
        // Go at the top of the page
        containerToScroll.scrollTop = 0;
        counter = 0;
      }

      // If the counter is at 5, it means we were not able to scroll top for 10 seconds,
      // So we have probably reached the top
      if (counter === 5) {
        console.log(`on a atteint le bout`);
        isScrollingFinished = true;
      }

      if (isScrollingFinished) {
        console.log(`scrolling finished`);
        resolve();
        clearInterval(scrollUntilTop);
      }


    }, 2000);


    function addProcessingAnimation() {
      let showProcessingMessage = document.createElement('style');
      showProcessingMessage.setAttribute(`id`, `custom-style`);
      showProcessingMessage.type = 'text/css';
      showProcessingMessage.innerHTML =
        `.processing::before {
          content: attr(data-before);
          padding: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 2em;
          font-family: "Roboto", arial, sans-serif;
          animation: processing 1s ease infinite;
          position:fixed;
          z-index: 10;
        }
        
        @keyframes processing {
          0%{opacity: 0;}
          50%{opacity: 1;}
          100%{opacity: 0;}
        }`;
      document.querySelector('head').appendChild(showProcessingMessage);

      containerToScroll.classList.add(`processing`);
      containerToScroll.setAttribute(`data-before`, `Processing all messages...`);
    }


  }).then( () => {
    console.log(`deuxième promesse`);
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
      let successMessage = document.createElement(`div`);
      successMessage.setAttribute(`id`, `success-message`);
      successMessage.textContent = "Perfect! Messages correctly got."
      Object.assign(
        successMessage.style,
        {
          position:"fixed",
          left:"50vw",
          top:"50vw",
          transform: `translate(-50%)`,
          padding: `30px`,
          font: `2em "Roboto", sans-serif`
        });
      document.body.appendChild(successMessage);
    }
  });

})();

