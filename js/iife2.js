var Chatty = (function(chatapp){
	var write = document.getElementById("write");
	var clearLogButton = document.getElementById('clear-log');

	chatapp.writeToDom = function(){
		var messages = Chatty.getMessages();
		var dates = Chatty.getDate();
        write.innerHTML = "";
		for (var i = 0; i < messages.length; i++){
			write.innerHTML +=
			`<div>
			<p class="message">${messages[i]}</p>
			<p class="date">${dates[i]}</p>
			<button class="delete">Delete</button>
			</div>`;
		}
        Chatty.deleteButton();
        clearLogButton.removeAttribute("disabled");

	}

	return chatapp;

})(Chatty || {});
