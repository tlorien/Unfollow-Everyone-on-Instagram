# Unfollow-Everyone-on-Instagram
This project contains a simple JavaScript script to automatically unfollow everything on your Instagram account's 'following' page. The script simulates user interactions by clicking the necessary buttons to unfollow each profile.

## Why?
**Privacy Concerns**
Following a large number of accounts can expose your personal interests, routines, and connections to a wide audience. By unfollowing these accounts, you can better protect your privacy and control the information you share online.

**Security Threats**
Every account you follow is a potential entry point for phishing attacks and other security threats. Unfollowing accounts reduces your exposure to malicious links and content, helping to keep your account secure.

**Digital Minimalism**
Digital minimalism is about reducing digital clutter and focusing on what truly matters. By unfollowing unnecessary accounts, you can create a more intentional and meaningful online experience. A cluttered Instagram feed can be overwhelming and distracting. Unfollowing accounts helps to declutter your feed, making it easier to focus on the content that is most relevant to you.

## Usage
1. **Log into Instagram and navigate to your profile.**

2. **Click on the "Following" count on your profile page** to open the list of pages you follow.

3. **Open the browser's developer tools:** Right-click on the page and select "Inspect", or press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac), to open the developer tools. Navigate to the Console tab in the developer tools.

4. **Paste the script into the console and press Enter:**

```javascript
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
```

## Important Notes
Use this script responsibly and be aware of Instagram's terms of service. Excessive unfollowing actions in a short period might get your account temporarily restricted.
Ensure you scroll down the list to load all the followed pages if the list is long.
This script includes delays to handle Instagram's dynamic content and avoid triggering rate limiting or other security measures.
By using this script, you can take control of your Instagram experience and make it more aligned with your personal values and goals.

## Contributing
If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License
Nah.
