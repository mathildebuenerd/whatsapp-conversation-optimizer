(function getCurrentContact() {
  // We use a promise because that's what browser.tabs.executeScript expects
  return new Promise( (resolve, reject) => {
    const name = document.querySelector('header span[title]').textContent;
    // If we are not currently in the page, or if we don't have a selected contact for example, then the name will be undefined
    if (name) {
      resolve(name);
    } else {
      reject("You are not on a conversation page");
    }
  })
})();
