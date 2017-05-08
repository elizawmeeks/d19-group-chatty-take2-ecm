"use strict"
console.log("iifeopt");
var Chatty = (function (oldChatty) {
    // GATHERING EVENT LISTENERS
    var newMessage = $('#message-input')[0];
    var themeSelect = $('#theme-select')[0];
    var textSizeSelect = $('#text-size-select')[0];
    var clearLogButton = $('#clear-log')[0];
    var userSelect = $('#user-select')[0];
    // NAV CLEAR FUNCTION
    oldChatty.navClear = function () {
        // GETTING MESSAGEARRAY LENGTH
        var messageArray = Chatty.getMessages();
        // console.log(messageArray);
        newMessage.value = null;
        var selects = document.getElementsByTagName('option');
        for (let i = 0; i < selects.length; i++) {
            selects[i].selected = false;
        }

        for (var j = 0; j < messageArray.length; j++) {
            // console.log(messageArray[j]);
            Chatty.deleteAllMessages();
        }
        Chatty.writeToDom();
        clearLogButton.setAttribute("disabled", true);
    }

    // ENTER KYPRESS FUNCTION
    oldChatty.enterKeyPress = function () {
        var user = $("#user-select")[0].value;
        // console.log("user", user);
        $("#message-input").keypress(function() {
            console.log("event", event);
            if (event.keyCode === 13) {
                Chatty.addMessages(newMessage.value, user);
                Chatty.writeToDom();
                newMessage.value = null;
            }
    });
        // newMessage.addEventListener("keypress", function(event) {
        //     var user = userSelect.value;
        //     if (event.keyCode === 13) {
        //         Chatty.addMessages(newMessage.value, user);
        //         Chatty.writeToDom();
        //         newMessage.value = null;
        //     }
        // });
    }

    // SELECT THEME FUNCTION
    oldChatty.selectTheme = function () {
        var themesSelect = $("#theme-select")[0];
        switch (themesSelect.value){
            case "1":
                document.body.classList.remove("darkTheme");
                break;
            case "2":
                document.body.classList.add("darkTheme");
                break;
            default:
                // console.log("Something is wrong");
        }
    }

    // Select Text Size Function
    oldChatty.selectTextSize = function () {
        var textSizeSelect = $("#text-size-select")[0];
        var write = document.getElementById("write");
        switch (textSizeSelect.value){
            case "a":
                write.classList.remove("largeText");
                break;
            case "b":
                write.classList.add("largeText");
                break;
            default:
                // console.log("Something is wrong");
        }
        oldChatty.chatViewInnerEL();
    }

    // DELETE MESSAGE BUTTON Event Listener
    oldChatty.deleteButton = function () {
        var messageDeleteButtons = $('.delete');
        for (var i = 0; i < messageDeleteButtons.length; i++) {

            messageDeleteButtons[i].addEventListener("click", function(event) {
                var deleteMessage = event.target.closest(".row").querySelector(".message").innerHTML;
                var deleteDate = event.target.closest(".row").querySelector(".date").innerHTML;
                var deleteUser = event.target.closest(".row").querySelector(".user").innerHTML;
                console.log("deletes", deleteMessage, deleteDate, deleteUser);
                Chatty.deleteMessages(deleteMessage, deleteDate, deleteUser);
            });
        }
    }


    // EDIT BUTTON EVENT LISTENER
    oldChatty.editButton = function() {
        var editMessage = $(".edit");
        for (var i = 0; i < editMessage.length; i++){
            editMessage[i].addEventListener("click", function(){
                var originalMessage = event.target.closest(".row").querySelector(".message").innerHTML;
                var inputBox = document.getElementById("message-input");
                var editButton = document.getElementById("edit-btn");
                inputBox.focus();
                inputBox.value = originalMessage;
                editButton.classList.remove("hidden");
                editButton.addEventListener("click", function(event){
                    Chatty.editMessages(originalMessage, inputBox.value);
                    editButton.classList.add("hidden");
                    inputBox.value = null;
                })
            });
        }
    }

    // Default Event Listeners
    oldChatty.defaultListeners = function () {
        $("#color-btn").click(Chatty.setUserColor);
        $('#btn-selectTheme').click(Chatty.selectTheme);
        $("#btn-selectText").click(Chatty.selectTextSize);
        $('#clear-log').click(Chatty.navClear);
    }

    oldChatty.optionsView = function (){
        var footerInput = $("#footerInput")[0];
        var footer = $("#footer")[0];
        $("#optionsClick").click(function(){
            var optionsView = $("#optionsView")[0];
            var chatView = $("#chatLogView")[0];
            optionsView.classList.remove("hidden");
            chatView.classList.add("hidden");
            footerInput.classList.add("hidden");
            footer.classList.add("footerHeight");
        })
    }

    oldChatty.chatView = function (){
        var chatLogClick = $("#chatLogClick")[0];
        var footerInput = $("#footerInput")[0];
        chatLogClick.addEventListener("click", oldChatty.chatViewInnerEL);
    }

    oldChatty.chatViewInnerEL = function (){
        var optionsView = $("#optionsView")[0];
        var chatView = $("#chatLogView")[0];
        var footer = $("#footer")[0];
        // console.log("chat view clicked");
        optionsView.classList.add("hidden");
        chatView.classList.remove("hidden");
        footerInput.classList.remove("hidden");
        footer.classList.remove("footerHeight");
    }

    return oldChatty
})(Chatty || {});


