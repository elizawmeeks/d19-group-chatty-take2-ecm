var Chatty = (function(chatapp){

    var messagesArray = [];

    chatapp.callxhr = function (){
        var loadMessages = new XMLHttpRequest();
        loadMessages.open("GET", startMessages.JSON);
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
        messagesArray = JSON.parse(event.target.responseText);
        console.log("messagesArray", messagesArray)
        });

    }


})(Chatty || {});
