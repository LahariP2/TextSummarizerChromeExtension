$(function(){
 
    chrome.storage.sync.get('summarizedTextPop', function(summarize) {
        $('#summarizedTextPop').text(summarize.summarizedTextPop);
    });
    
    $('#submitTextPop').click(function(){
         chrome.storage.sync.get('summarizedTextPop', function(summarize){
             var newSummary = "";
             var inputText = $('#inputTextPop').val();
             newSummary += inputText;
   
             chrome.storage.sync.set({'summarizedTextPop': newSummary}, function() {
                
                 chrome.notifications.create("summaryNotifPop",
                     {
                         type: 'basic',            
                         iconUrl: 'icon48.png',
                         title: 'Summarized Text',
                         message: inputText
                     }
                 );
   
             });
            
             $('#summarizedTextPop').text(newSummary);
             $('#inputTextPop').val('');
   
         })
        
    })
   
  });
  