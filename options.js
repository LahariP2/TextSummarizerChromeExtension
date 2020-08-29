$(function(){
 
    $('#submitTextOp').click(function(){
         chrome.storage.sync.get('summarizedTextOp', function(summarize){
             var newSummary = "";
             var inputText = $('#inputTextOp').val();
             newSummary += inputText;
             chrome.storage.sync.set({'summarizedTextOp': newSummary}, function() {});
            
             $('#summarizedTextOp').text(newSummary);
             $('#inputTextOp').val('');
         })
        
    })
 });