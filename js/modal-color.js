console.log("COLOR SELECT RICKK!!!!!");


var Chatty = (function(chatapp){

    var userBackground = document.getElementById("background-select");
    var userText = document.getElementById("text-select");


    chatapp.setUserColor = function(){
        document.body.setAttribute(`style`, `background-color:${userBackground.value};
            color: ${userText.value}`);

    }


    return chatapp;

})(Chatty || {});
