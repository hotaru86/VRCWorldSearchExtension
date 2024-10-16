// 拡張機能がインストールされたときに、コンテキストメニューを作成
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "VRCWorldSearch",
      title: "VRChatで検索: \"%s\"",
      contexts: ["selection"]
    });
  });
  
  // コンテキストメニューがクリックされたときに、新しいタブで検索
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "VRCWorldSearch" && info.selectionText) {
      const query = encodeURIComponent(info.selectionText);
      const url = `https://vrchat.com/home/search/${query}`;
      chrome.tabs.create({ url });
    }
  });
  