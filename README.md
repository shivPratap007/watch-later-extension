# Watch List Chrome Extension

## Overview

The **Watch List** Chrome extension helps you save and manage links to YouTube videos, blogs, or any other web content that you want to revisit later. With this extension, you can easily add links with titles, view them in a list, and remove them when you're done.

## Installation

### Open Chrome and Access Extensions

1. Go to `chrome://extensions/`.
2. Enable **Developer mode** by toggling the switch in the top right corner.

### Load the Unpacked Extension

1. Click **Load unpacked**.
2. Select the directory where the extension files (`background.js`, `popup.html`, `popup.js`, `manifest.json`) are located.

### Use the Extension

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Add links with titles, view your list, and manage your saved content.

## File Structure

- **`manifest.json`**: Contains metadata about the extension and permissions required.
- **`background.js`**: Handles background tasks and storage management.
- **`popup.html`**: Defines the layout of the extension’s popup.
- **`popup.js`**: Contains the logic for adding, displaying, and removing links.

## Code Explanation

### `popup.js`

- **`DOMContentLoaded Event`**: Initializes the popup, setting up event listeners for user interactions.
- **`updateLinkList()`**: Fetches the list of saved links from Chrome storage and updates the popup UI.
- **`addButton Click Event`**: Adds a new link to Chrome storage and refreshes the list.
- **`removeButton Click Event`**: Removes a link from Chrome storage and updates the list.

### `background.js`

- **`onInstalled Listener`**: Initializes Chrome storage with an empty list of links when the extension is first installed.
- **`addLink() Function`**: Adds a new link to the list stored in Chrome storage.
- **`removeLink() Function`**: Removes a link from the list stored in Chrome storage.
- **`onMessage Listener`**: Handles messages from `popup.js` for adding or removing links.

## Troubleshooting

- **Extension Not Loading**: Ensure you have selected the correct directory with all necessary files. Check for any errors in the Chrome Developer Tools Console.
- **Links Not Updating**: Make sure to click the refresh button or re-open the popup to see updated changes.

## Contributing

Feel free to fork this repository and contribute improvements. Please ensure your code follows the existing style and includes relevant tests.

## License

This extension is licensed under the MIT License.
