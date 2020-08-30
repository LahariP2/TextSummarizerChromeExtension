// When the browser is started, start running the background 
// event page to display context menu when right-clicked
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id : "summarizeMenu",
        title : "Summarize",
        contexts : ["selection"]
    });
 });

 chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "summarizeMenu" && clickData.selectionText) {
        chrome.storage.sync.get(['summarizedTextPop'], function(summarize) {
            var newSummary = "";
            newSummary += clickData.selectionText;
  
            chrome.storage.sync.set({'summarizedTextPop': newSummary}, function(){
                chrome.notifications.create("summaryNotifEP",
                    {
                        type: 'basic',            
                        iconUrl: 'icon48.png',
                        title: 'Summarized Text',
                        message: newSummary
                    }
                );
            });
        });
    }
 });