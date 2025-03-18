

    // ==UserScript==
    // @name         Unfollow Everyone on Instagram
    // @namespace    https://www.github.com/tlorien
    // @version      0.1
    // @description  Automatically unfollows EVERYONE on Instagram
    // @author       tlorien
    // @match        https://www.instagram.com/*
    // @grant        none
    // @license      MIT
    // ==/UserScript==
     
    (async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      
      const unfollowButtons = document.querySelectorAll('button');
      
      for (const button of unfollowButtons) {
        if (button.innerText === 'Following' || button.innerText === 'Requested') {
          button.click();
          await delay(500);
          
          const confirmButtons = document.querySelectorAll('button');
          for (const confirmButton of confirmButtons) {
            if (confirmButton.innerText === 'Unfollow') {
              confirmButton.click();
              break;
            }
          }
          
          await delay(2000);
        }
      }
    })();

