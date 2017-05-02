console.log("iife1");


var Chatty = (function(chatapp){

    var messagesArray = [];
    var newJSON = [];
    var datesArray = [];

    chatapp.xhrfunction = function (){
        var loadMessages = new XMLHttpRequest();
        loadMessages.open("GET", "startMessages.JSON");
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
        newJSON = JSON.parse(event.target.responseText).messages;
        for (var i=0; i<newJSON.length;i++){
            messagesArray.push(newJSON[i].text);
            datesArray.push(Chatty.setDate());
        }
        Chatty.enterKeyPress();
        Chatty.writeToDom()
        Chatty.defaultListeners();
        });
    }


    //To get array - run Chatty.getMessages();
    chatapp.getMessages = function(){
        return messagesArray;
    };

    chatapp.getDate = function(){
        return datesArray;
    }

    chatapp.addMessages = function(message){
        messagesArray.push(message);
        datesArray.push(Chatty.setDate())
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

    return chatapp;

})(Chatty || {});




