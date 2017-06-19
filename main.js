var userScore = 0;
var compScore = 0;
var scores = '';
var win = 'You win!';
var lose = 'You lose :(';
var draw = 'It\'s a draw!';

run();

function run () {
	
	
	while(Math.max(userScore, compScore) < 3) {
		var comp = randomNumber();
		var user = userInput();
		var result = game(comp, user);
		score(result);
		scores = '\nYour score: ' + userScore + '\nComputer\'s score: ' + compScore;
		alert(result + scores);
	}
	reset();
	
}

function randomNumber () {
	var min = Math.ceil(1);
	var max = Math.floor(4);
	var num = Math.floor(Math.random() * (max - min)) + min;
	return num;
}

function userInput () {
	var user = prompt("Rock, paper or scissors?");
	return user;
}

function score (str) {
	console.log(str);

	if (str == 'You win!'){
		userScore++;
	} else if (str == 'You lose :(') {
		compScore++;
	}
}

function game(comp, user) {
	var result = '';
	switch (comp) {

		case 1:
			result += userRock(user);
			break;

		case 2:
			result += userPaper(user);
			break;

		case 3:
			result += userScissors(user);
			break;
	}
	return result;
}

function userRock (user) {
	var result = '';
	switch (user) {

	 	case 'rock':
	 		result += draw;
			break;

		case 'paper':
	 		result += win;
	 		break;

		case 'scissors':
	 		result += lose;
	 		break;
 	}
 	return result;
}

function userPaper (user) {
	var result = '';
	switch (user) {

	 	case 'rock':
	 		result += lose;
			break;

	 	case 'paper':
	 		result += draw;
			break;

	 	case 'scissors':
			result += win;
			break;
 	}
 	return result;
}

function userScissors (user) {
	var result = '';
	switch (user) {

	 	case 'rock':
	 		result += win;
			break;

	 	case 'paper':
	 		result += lose;
			break;

	 	case 'scissors':
	 		result += draw;
			break;
 	}
 	return result;
}

function reset () {
	userScore = 0;
	compScore = 0;
	run();
}