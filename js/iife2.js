var Chatty = (function(chatapp){
	var write = document.getElementById("write");
	var clearLogButton = document.getElementById('clear-log');

	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
		var dates = Chatty.getDate();
		var users = Chatty.getUsers();
        write.innerHTML = "";
		for (var i = 0; i < messages.length; i++){
			write.innerHTML +=
			`<div class="row message-container">
			<p class=" col s6 offset-s6 message">${messages[i]}</p>
            </div>
            <div class="row message-details">
			<p class="col s2 offset-s6 user">-${users[i]}</p>
			<p class="col s2  date">${dates[i]}</p>
			<button class=" col s1  delete">Delete</button>
			<button class="col s1  edit">Edit</button>
			</div>`;
            }
		}
        Chatty.deleteButton();
        Chatty.editButton();
        clearLogButton.removeAttribute("disabled");



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

	chatapp.scrollBottom = function(){
		var chatLog = document.getElementById("chat-log");
		console.log("chatLog", chatLog);
		chatLog.scrollTop = chatLog.scrollHeight;
	}

	return chatapp;

})(Chatty || {});
