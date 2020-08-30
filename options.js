$(function(){
 
    $('#submitTextOp').click(function(){
         chrome.storage.sync.get('summarizedTextOp', function(summarize){
             var newSummary = "";
             var inputText = $('#inputTextOp').val();
             newSummary += inputText;
             chrome.storage.sync.set({'summarizedTextOp': newSummary}, function() {
                chrome.notifications.create("summaryNotifOp",
                    {
                        type: 'basic',            
                        iconUrl: 'icon48.png',
                        title: 'Summarized Text',
                        message: inputText
                    }
                );
             });
            
             $('#summarizedTextOp').text(newSummary);
             $('#inputTextOp').val('');
         })
        
    })
 });
  
 