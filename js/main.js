$(document).ready(function() {
    $('select').material_select();
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

console.log("main.js loaded");


Chatty.xhrfunction();

var messagesFire = firebase.database().ref('messages/');


messagesFire.set({
      date: "Chatty.getDate();",
      text: "What up.",
      user: "Matt yeah"
});
