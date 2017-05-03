var Chatty = (function(chatapp){
	var write = document.getElementById("write");
	var clearLogButton = document.getElementById('clear-log');

	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
		var dates = Chatty.getDate();
		var users = Chatty.getUsers();
        write.innerHTML = "";

  		// FIREBASE SHIT
        var messagesFire = firebase.database().ref('messages/');

        var thingsObject;
		messagesFire.on("value", function(snapshot) {
		   thingsObject = snapshot.val();

		   for (var i = 0; i < thingsObject.length; i++){
			Chatty.addMessages (thingsObject[i].text, thingsObject[i].date, thingsObject[i].user);


			write.innerHTML +=

			`<div class="individualMsg">
				<div class="row">
					<div class="col s9 grey-text text-darken-3">
						<p class="message">${messages[i]}</p>
						<p class="user">-${users[i]}</p>
						<p class="date">${dates[i]}</p>
					</div>
					<div class="col s3 buttons">
						<a class="delete waves-effect waves-light btn">Delete</a>
						<a class="edit waves-effect waves-light btn">Edit</a>
					</div>
				</div>
			</div>`;

		}
		}, function (error) {
		   console.log("Error: " + error.code);
		});

        Chatty.deleteButton();
        Chatty.editButton();
        Chatty.scrollBottom();
        clearLogButton.removeAttribute("disabled");



	}

	chatapp.messageLimit = function(){
		var messages = Chatty.getMessages();
		// console.log("messages", messages);
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
		// console.log("chatLog", chatLog);
		chatLog.scrollTop = chatLog.scrollHeight;
	}

	return chatapp;

})(Chatty || {});
