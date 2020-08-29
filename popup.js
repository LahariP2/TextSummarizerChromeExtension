$(function(){
 
    $('#submitTextPop').click(function(){
         chrome.storage.sync.get('summarizedTextPop', function(summarize){
             var newSummary = "";
             var inputText = $('#inputTextPop').val();
             newSummary += inputText;
   
             chrome.storage.sync.set({'summarizedTextPop': newSummary}, function() {});
            
             $('#summarizedTextPop').text(newSummary);
             $('#inputTextPop').val('');
   
         })
        
    })
   
  });
  