(function getContent() {
  return new Promise( (resolve, reject) => {

    const containerToScroll = document.querySelector(`.copyable-area > div`);

    setInterval( () => {

      // Every whatsapp discussion thread starts with a div that is not visible until we reach the top of the thread
      // getBoundingClientRect allow us to get the current position of the div, even though its top position with style.top or getComputedStyle is "auto"
      // If we have not yet reached the top, this position is less than 0, if we have it's visible so it's around 70px
      // const divToFind = document.querySelector(`.copyable-area > div div[role="button"]`);

      // const posDivToFind = divToFind.getBoundingClientRect();

      // if (posDivToFind.top > 0) {
      //
      // }
      // console.log(`divToFind`, divToFind);

      // go at the top of the page
      containerToScroll.scrollTop = 0;
      // containerToScroll.scrollTop += 5000;


    }, 2000);
    //
    // let infiniteScroll = new Promise( (resolve, reject) => {
    //   containerToScroll.scrollTop -= 10000;
    //   setInterval( () => {
    //     if (containerToScroll.scrollTop === 0) {
    //       console.log("je pense que j'ai fini");
    //       let messages = getMessages();
    //       console.log("je viens de récupérer les messages, je vais resolve", messages);
    //       resolve(messages);
    //     } else {
    //       console.log("j'ai pas encore fini");
    //       containerToScroll.scrollTop -= 10000;
    //     }
    //   }, 2000);
    // });
    //
    // infiniteScroll.then( () => {
    //   console.log("ma promesse à l'intérieur, c'est fini!");
    // });
//

    function getMessages() {
      const messagesInElements = document.querySelectorAll(`.message-in .selectable-text`);
      const messagesOutElements = document.querySelectorAll(`.message-out .selectable-text`);

      let messagesIn = [];
      let messagesOut = [];

      for (let i=0; i<messagesInElements.length; i++) {
        messagesIn.push(messagesInElements[i].textContent)
      }

      for (let i=0; i<messagesOutElements.length; i++) {
        messagesOut.push(messagesOutElements[i].textContent)
      }

      return {
        messagesIn: messagesIn,
        messagesOut: messagesOut
      };
    }

  });

})();


