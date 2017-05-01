console.log("iife1");


var Chatty = (function(chatapp){

    var messagesArray = [];

    chatapp.xhrfunction = function (){
        var loadMessages = new XMLHttpRequest();
        loadMessages.open("GET", "startMessages.JSON");
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
        messagesArray = JSON.parse(event.target.responseText).messages;
        console.log("messagesArray", messagesArray)
        });
    }

    return chatapp;

})(Chatty || {});
