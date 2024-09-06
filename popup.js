document.addEventListener('DOMContentLoaded', () => {
  const titleInput = document.getElementById('titleInput');
  const linkInput = document.getElementById('linkInput');
  const addButton = document.getElementById('addButton');
  const linkList = document.getElementById('linkList');

  // Function to update the displayed list
  function updateLinkList() {
    chrome.storage.local.get(['links'], (result) => {
      const links = result.links || [];
      linkList.innerHTML = '';
      links.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Set the title and link as anchor
        a.textContent = item.title;
        a.href = item.link;
        a.target = "_blank"; // Open link in new tab

        li.appendChild(a);

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          // Send the title of the link to be removed
          chrome.runtime.sendMessage({ action: 'removeLink', title: item.title }, () => {
            updateLinkList(); // Refresh the list after removal
          });
        });
        li.appendChild(removeButton);
        linkList.appendChild(li);
      });
    });
  }

  // Add a new link to the list
  addButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const link = linkInput.value.trim();

    if (title && link) {
      chrome.storage.local.get(['links'], (result) => {
        const links = result.links || [];
        links.push({ title: title, link: link });
        chrome.storage.local.set({ links: links }, () => {
          titleInput.value = '';
          linkInput.value = '';
          updateLinkList(); // Refresh the list after adding a new item
        });
      });
    }
  });

  // Initialize the list on popup load
  updateLinkList();
});
