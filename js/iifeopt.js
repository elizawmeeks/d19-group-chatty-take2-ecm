"use strict"
console.log("iifeopt");
var Chatty = (function (oldChatty) {
    // GATHERING EVENT LISTENERS
    var newMessage = document.getElementById('message-input');
    var clearLogButton = document.getElementById('clear-log');
    var themeSelect = document.getElementById('theme-select');
    var textSizeSelect = document.getElementById('text-size-select');

    // NAV CLEAR FUNCTION
    oldChatty.navClear = function () {
        // GETTING MESSAGEARRAY LENGTH
        var messageArray = Chatty.getMessages();
        newMessage.value = null;
        var selects = document.getElementsByTagName('option');
        for (let i = 0; i < selects.length; i++) {
            selects[i].selected = false;
        }
        for (var j = 0; j < messageArray.length;j++) {
            Chatty.deleteMessages(j);
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
        var themes = document.getElementsByName('theme-select');
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].value === b) {
                // adding/removing class
            }else if(true) {
                // adding/removing class
            }
        }
        var sizes = document.getElementsByName('text-size-select');
        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i].value === b) {
                // adding/removing class
            }else if(true) {
                // adding/removing class
            }
        }


    }

    // DELETE MESSAGE BUTTON FUNCTION
    oldChatty.deleteButton = function () {
        var messageDeleteButtons = document.getElementsByClassName('delete');
        for (var i = 0; i < messageDeleteButtons.length; i++) {
            messageDeleteButtons.item(i).addEventListener("click", function(event) {
                var deleteMessage = event.target.closest("p");
                console.log("deleteMessage", event);
               // Chatty.deleteMessages();
                Chatty.writeToDom();
            });


        }

    }

    return oldChatty
})(Chatty || {});


