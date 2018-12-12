(function getContent() {
  console.log(`hello`);
  const containerToScroll = document.querySelector(`.copyable-area > div`);

  containerToScroll.scrollTop += 10000;
  containerToScroll.scrollTop += containerToScroll.offsetTop;

  const messagesInElements = document.querySelectorAll(`.message-in .selectable-text`);
  const messagesOutElements = document.querySelectorAll(`.message-in .selectable-text`);

  let messagesIn = [];
  let messagesOut = [];

  for (let i=0; i<messagesInElements.length; i++) {
    messagesIn.push(messagesInElements[i].textContent)
  }

  for (let i=0; i<messagesOutElements.length; i++) {
    messagesOut.push(messagesOutElements[i].textContent)
  }
  // console.log(bodyContent.textContent);
  // bodyContent.style.backgroundColor = "#f00";
  return {
    messagesIn: messagesIn,
    messagesOut: messagesOut
  };
})();


