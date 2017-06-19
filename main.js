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
		alert('Computer chose ' + comp + '\n' + result + scores);
	}
	reset();
	
}

function randomNumber () {
	var min = Math.ceil(1);
	var max = Math.floor(6);
	var num = Math.floor(Math.random() * (max - min)) + min;

	switch (num) {
		case 1:
			return 'rock';
			break;
		case 2:
			return 'paper';
			break;

		case 3:
			return 'scissors';
			break;

		case 4:
			return 'lizard';
			break;

		case 5:
			return 'spock';
			break;
	}
}

function userInput () {
	var user = prompt("Rock, paper, scissors, lizard or Spock?");
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

		case 'rock':
			result += userRock(user);
			break;

		case 'paper':
			result += userPaper(user);
			break;

		case 'scissors':
			result += userScissors(user);
			break;

		case 'lizard':
			result += userLizard(user);
			break;

		case 'spock':
			result += userSpock(user);
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

	 	case 'lizard':
	 		result += win;
	 		break;

	 	case 'spock':
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

		case 'lizard':
	 		result += lose;
	 		break;

	 	case 'spock':
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

		case 'lizard':
	 		result += win;
	 		break;

	 	case 'spock':
	 		result += lose;
	 		break;
 	}
 	return result;
}

function userLizard (user) {
	var result = '';
	switch (user) {

	 	case 'rock':
	 		result += lose;
			break;

	 	case 'paper':
	 		result += win;
			break;

	 	case 'scissors':
	 		result += lose;
			break;

		case 'lizard':
	 		result += draw;
	 		break;

	 	case 'spock':
	 		result += win;
	 		break;
 	}
 	return result;
}

function userSpock (user) {
	var result = '';
	switch (user) {

	 	case 'rock':
	 		result += win;
			break;

	 	case 'paper':
	 		result += lose;
			break;

	 	case 'scissors':
	 		result += win;
			break;

		case 'lizard':
	 		result += lose;
	 		break;

	 	case 'spock':
	 		result += draw;
	 		break;
 	}
 	return result;
}

function reset () {

	if (userScore === 3) {
		alert('Congratulations, you won! Resetting game.')
	} else {
		alert('Unlucky, you losw. Resetting game.')
	}

	userScore = 0;
	compScore = 0;
	run();
}