var fs = require("fs"); //reads and writes files

var basicFlashCard = require('./BasicCard.js');
var clozeFlashCard = require('./ClozeCard.js');
var inquirer = require('inquirer');

var starterQuestion = function (answer){
	inquirer.prompt([{
	name: 'flashcard',
	message: 'what kind of flash card would you like to make?',
	type: 'list',
	choices: [{
		name: 'basic-flashcard'
	},{
		name: 'cloze-flashcard'
	}]
}]).then(function(answer) {
	if(answer.flashcard ===  'basic-flashcard'){
		mkBasicCard();
	}
	else{
		mkClozeCard();
	}
});
}

starterQuestion();

var mkBasicCard = function (){
	inquirer.prompt([{
        name: 'front',
        message: 'What is the question?',
    },{
    	name: 'back',
    	message: 'What is the answer?',
	}]).then(function(answer) {
		var newBasic = new basicFlashCard(answer.front, answer.back);
		newBasic.create();
		starterQuestion();
	});
}

var mkClozeCard = function (){
	inquirer.prompt([{
		name: 'text',
		message: 'What is the full text?',
	},{
		name: 'cloze',
		message: 'What is the cloze?'
	}]).then(function(answer){
		var newCloze = new clozeFlashCard(answer.text, answer.cloze);
		newCloze.create();
		starterQuestion();
	});
}
