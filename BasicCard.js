var fs = require("fs"); //reads and writes files

module.exports = basicCard;

function basicCard (front, back){
	this.front = front;
	this.back = back;
	this.create = function() {
	// flashcard object to be appended to file
	var data = {
	    front: this.front,
	    back: this.back,
	    type: "basic",
	};
	// add card to log.txt
	fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
	    // if there is an error, log the error
	    if (error) {
	        console.log(error);
	    }
	});
	};
}

