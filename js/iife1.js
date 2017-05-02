console.log("iife1");


var Chatty = (function(chatapp){

    var messagesArray = [];

    chatapp.xhrfunction = function (){
        var loadMessages = new XMLHttpRequest();
        loadMessages.open("GET", "startMessages.JSON");
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
        messagesArray = JSON.parse(event.target.responseText).messages;
        console.log("messagesArray", messagesArray);
        Chatty.enterKeyPress();
        Chatty.writeToDom();
        Chatty.defaultListeners();
        });
    }


    //To get array - run Chatty.getMessages();
    chatapp.getMessages = function(){
        return messagesArray;
    };

    chatapp.addMessages = function(message){
        messagesArray.push(message);
        chatapp.messageLimit();
    }


    chatapp.deleteAllMessages = function() {
        messagesArray.splice(0, messagesArray.length);
    }

    chatapp.deleteMessages = function(message){
        var index = messagesArray.indexOf(message);
        console.log("index", index);
        messagesArray.splice(index, 1);
        console.log("messagesArray after splice", messagesArray);
        Chatty.writeToDom();
    }

    chatapp.editArray = function(index, message){
        messagesArray.splice(index, 1, message);
    }

    return chatapp;

})(Chatty || {});




