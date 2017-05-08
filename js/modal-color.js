console.log("COLOR SELECT RICKK!!!!!");


var Chatty = (function(chatapp){

    var userBackground = $("#background-select")[0];
    var userText = $("#text-select")[0];


    chatapp.setUserColor = function(){
        document.body.setAttribute(`style`, `background-color:${userBackground.value};
            color: ${userText.value}`);

    }


    return chatapp;

})(Chatty || {});
