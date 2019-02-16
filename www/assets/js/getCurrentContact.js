(function getCurrentContact() {
  // We use a promise because that's what browser.tabs.executeScript expects
  console.log(`fonction getCurrentContact est lue`);
  return new Promise( (resolve, reject) => {
    const name = document.querySelector('header ._1wjpf').textContent;
    // If we are not currently in the page, or if we don't have a selected contact for example, then the name will be undefined
    if (name) {
      resolve(name);
    } else {
      reject("you're not on a conversation page");
    }

  })
})();
