var Chatty = (function(chatty){
	var write = document.getElementById("write");
	chatty.writeToDom = function(array){
		write.innerHTML += array;
	}

})(Chatty || {});