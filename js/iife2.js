var Chatty = (function(chatapp){
	var write = document.getElementById("write");

	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
        write.innerHTML = "";
		for (var i = 0; i < messages.length; i++){
			write.innerHTML += `<div>${messages[i]}<button class="delete">Delete</button></div>`;
		}
        Chatty.deleteButton();
	}

	return chatapp;

})(Chatty || {});
