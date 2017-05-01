"use strict"

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
        for (let j = 0; i < messageArray.length) {
            Chatty.deleteMessages(j);
        }
        Chatty.writeToDom(placeholder);
    }

    // ENTER KYPRESS FUNCTION
    oldChatty.enterKeyPress = function () {
        newMessage.addEventListener("keypress", function() {

        });
    }
    // SELECT THEME FUNCTION
    oldChatty.selectTheme = function () {

    }
    // DELETE MESSAGE BUTTON FUNCTION
    oldChatty.deleteButton = function () {

    }

    return oldChatty
})(Chatty || {});


