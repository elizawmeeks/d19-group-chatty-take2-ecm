console.log("TINY RICK!!!!!!!");

var Chatty = (function(chatapp){

    chatapp.getDate = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        if(dd<10) {
            dd='0'+dd
        }
        if(mm<10) {
            mm='0'+mm
        }
        if (min<10){
            min = '0'+min
        }
        if(sec < 10){
            sec = '0'+sec
        }
        today = `${mm}/${dd} - ${hr}:${min}:${sec}`;

        return today;
    };



    return chatapp;

})(Chatty || {});
