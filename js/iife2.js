var Chatty = (function(chatapp){
	var write = document.getElementById("write");
	
	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
		for (var i = 0; i < messages.length; i++){
			write.innerHTML += `${messages[i]}<br>`;	
		}
	}

	return chatapp;

})(Chatty || {});