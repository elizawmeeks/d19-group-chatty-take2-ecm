"use strict"
console.log("iifeopt");
var Chatty = (function (oldChatty) {
    // GATHERING EVENT LISTENERS
    var newMessage = document.getElementById('message-input');
    var themeSelect = document.getElementById('theme-select');
    var textSizeSelect = document.getElementById('text-size-select');

    // NAV CLEAR FUNCTION
    oldChatty.navClear = function () {
        // GETTING MESSAGEARRAY LENGTH
        var messageArray = Chatty.getMessages();
        console.log(messageArray);
        newMessage.value = null;
        var selects = document.getElementsByTagName('option');
        for (let i = 0; i < selects.length; i++) {
            selects[i].selected = false;
        }

        for (var j = 0; j < messageArray.length; j++) {
            console.log(messageArray[j]);
            Chatty.deleteAllMessages();
        }
        Chatty.writeToDom();
    }

    // ENTER KYPRESS FUNCTION
    oldChatty.enterKeyPress = function () {
        newMessage.addEventListener("keypress", function(event) {
            if (event.keyCode === 13) {
                Chatty.addMessages(newMessage.value);
                Chatty.writeToDom();
            }

        });
    }
    // SELECT THEME FUNCTION
    oldChatty.selectTheme = function () {
        var themesSelect = document.getElementById("theme-select");
        switch (themesSelect.value){
            case "1":
                document.body.classList.remove("darkTheme");
                break;
            case "2":
                document.body.classList.add("darkTheme");
                break;
            default:
                console.log("Something is wrong");
        }
    }

    // Select Text Size Function
    oldChatty.selectTextSize = function () {
        var textSizeSelect = document.getElementById("text-size-select");
        var write = document.getElementById("write");
        switch (textSizeSelect.value){
            case "a":
                write.classList.remove("largeText");
                break;
            case "b":
                write.classList.add("largeText");
                break;
            default:
                console.log("Something is wrong");
        }
    }

    // DELETE MESSAGE BUTTON FUNCTION
    oldChatty.deleteButton = function () {
        var messageDeleteButtons = document.getElementsByClassName('delete');
        for (var i = 0; i < messageDeleteButtons.length; i++) {
            messageDeleteButtons.item(i).addEventListener("click", function(event) {
                var deleteMessage = event.target.closest("div").querySelector(".message").innerHTML;
                console.log("deleteMessage", deleteMessage);
                Chatty.deleteMessages(deleteMessage);
            });
        }
    }

    return oldChatty
})(Chatty || {});


