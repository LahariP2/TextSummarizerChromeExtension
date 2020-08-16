$(function(){
    $('#saveText').click(function(){
        var text = $('#inputText').val();
        if(text) {
            chrome.storage.sync.set({'text': text}, function() {
                close();
            });
        }
    });
    $('')
})