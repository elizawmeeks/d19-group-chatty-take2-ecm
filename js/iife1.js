console.log("iife1");


var Chatty = (function(chatapp){

    var messagesArray = [];
    var newJSON = [];
    var newJSON2 = [];
    var newJSON3 = [];
    var newJSON4 = [];
    var newJSON5 = [];
    var datesArray = [];
    var usersArray = [];
    var pushData = function(JSONarray) {
        for (var i=0; i< JSONarray.length;i++){
            messagesArray.push(JSONarray[i].text);
            datesArray.push(Chatty.setDate());
            usersArray.push(JSONarray[i].user);
        }
    }

    chatapp.xhrfunction = function (){
        var loadMessages = new XMLHttpRequest();
        var loadMessages2 = new XMLHttpRequest();
        var loadMessages3 = new XMLHttpRequest();
        var loadMessages4 = new XMLHttpRequest();
        var loadMessages5 = new XMLHttpRequest();
        loadMessages.open("GET", "startMessages.JSON");
        loadMessages2.open("GET", "startMessages2.JSON");
        loadMessages3.open("GET", "startMessages3.JSON");
        loadMessages4.open("GET", "startMessages4.JSON");
        loadMessages5.open("GET", "startMessages5.JSON");
        loadMessages.send();
        loadMessages.addEventListener("load", function(event){
            loadMessages2.send();
            newJSON = JSON.parse(event.target.responseText).messages;
            pushData(newJSON);

        });
        loadMessages2.addEventListener("load", function(event) {
            loadMessages3.send();
            newJSON2 = JSON.parse(event.target.responseText).messages;
            pushData(newJSON2);
        });
        loadMessages3.addEventListener("load", function(event) {
            loadMessages4.send();
            newJSON3 = JSON.parse(event.target.responseText).messages;
            pushData(newJSON3);
        });
        loadMessages4.addEventListener("load", function(event) {
            loadMessages5.send();
            newJSON4 = JSON.parse(event.target.responseText).messages;
            pushData(newJSON4);
        });
        loadMessages5.addEventListener("load", function(event) {
            newJSON5 = JSON.parse(event.target.responseText).messages;
            pushData(newJSON5);
            Chatty.enterKeyPress();
            Chatty.writeToDom()
            Chatty.defaultListeners();
            Chatty.optionsView();
            Chatty.chatView();
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
        messagesArray.splice(indexMessage, 1);
        datesArray.splice(indexMessage,1);
        usersArray.splice(indexMessage, 1);
        // console.log("Arrays after splice", messagesArray, datesArray, usersArray);
        Chatty.writeToDom();
    }

    chatapp.editMessages = function(originalMessage, newMessage){
        var indexMessage = messagesArray.indexOf(originalMessage);
        messagesArray.splice(indexMessage, 1, newMessage);
        Chatty.writeToDom();
    }

    return chatapp;

})(Chatty || {});




