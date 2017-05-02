console.log("iife1");


var Chatty = (function(chatapp){

    var messagesArray = [];
    var newJSON = [];
    var datesArray = [];
    var usersArray = [];

    chatapp.xhrfunction = function (){
        var loadMessages = new XMLHttpRequest();
        loadMessages.open("GET", "startMessages.JSON");
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
        newJSON = JSON.parse(event.target.responseText).messages;
        for (var i=0; i<newJSON.length;i++){
            messagesArray.push(newJSON[i].text);
            datesArray.push(Chatty.setDate());
            usersArray.push(newJSON[i].user);
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

    chatapp.getUsers = function() {
        return usersArray;
    }

    chatapp.addMessages = function(message, user){
        messagesArray.push(message);
        usersArray.push(user);
        datesArray.push(Chatty.setDate())
        chatapp.messageLimit();

    }


    chatapp.deleteAllMessages = function() {
        messagesArray = [];
        datesArray = [];
        usersArray = [];
    }

    chatapp.deleteMessages = function(message, date, user){
        var indexMessage = messagesArray.indexOf(message);
        var indexDate = datesArray.indexOf(date);
        var indexUser = usersArray.indexOf(user);
        messagesArray.splice(indexMessage, 1);
        datesArray.splice(indexDate,1);
        usersArray.splice(indexUser, 1);
        console.log("messagesArray after splice", messagesArray);
        Chatty.writeToDom();
    }

    chatapp.editMessages = function(originalMessage, newMessage){
        var indexMessage = messagesArray.indexOf(originalMessage);
        messagesArray.splice(indexMessage, 1, newMessage);
        Chatty.writeToDom();
    }

    return chatapp;

})(Chatty || {});




