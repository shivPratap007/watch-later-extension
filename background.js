chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ links: [] });
});

// Function to add a link
function addLink(link) {
  chrome.storage.local.get(["links"], (result) => {
    let links = result.links || [];
    links.push(link);
    chrome.storage.local.set({ links: links });
  });
}

// Function to remove a link by title
function removeLink(title) {
  chrome.storage.local.get(["links"], (result) => {
    let links = result.links || [];
    
    // Filter out the link with the matching title
    links = links.filter((l) => l.title !== title);
    
    // Update the storage with the filtered list
    chrome.storage.local.set({ links: links });
  });
}

// Listener for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "addLink") {
    addLink(request.link);
  } else if (request.action === "removeLink") {
    removeLink(request.title); // Pass title instead of the full link object
  }
});
