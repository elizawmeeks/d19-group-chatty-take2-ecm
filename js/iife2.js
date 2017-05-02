var Chatty = (function(chatapp){
	var write = document.getElementById("write");

	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
        write.innerHTML = "";
		for (var i = 0; i < messages.length; i++){
			write.innerHTML += `<div><p class="message">${messages[i]}</p><button class="delete">Delete</button><button class="edit">Edit</button></div>`;
		}
        Chatty.deleteButton();
	}

	chatapp.messageLimit = function(){
		var messages = Chatty.getMessages();
		console.log("messages", messages);
		switch (true){
			case (messages.length > 20): 
				console.log("There are more than 20 messages");
				var msgToDelete = messages[0];
				Chatty.deleteMessages(msgToDelete);
				break;
			default:
				console.log("There are fewer than 20 messages");
				break;
		}
	}

	return chatapp;

})(Chatty || {});
