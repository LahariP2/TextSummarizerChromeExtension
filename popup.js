$(function() {
   $('#submitText').click(function(){
       chrome.storage.sync.get('text', function(inputText){
           var submitted_text = $('#inputText').val();
           

       })
   })

})