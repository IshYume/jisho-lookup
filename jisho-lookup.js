chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "jishoLookup",
    title: "Search on Jisho",
    contexts: ["selection"],
    icons: {
      16: "icons/jisho-logo.png",
    },
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "jishoLookup" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const url = `https://jisho.org/search/${query}`;
    chrome.tabs.create({ url });
  }
});
