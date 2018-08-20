var magicNumber = 21;
var stringNumber = prompt("Guess a number between 1 and 100");
var number = Number(stringNumber);

//if the number is correct, alert 'Hooray, you guessed correctly'
if (number === magicNumber) {
	alert("You guessed correctly! You are a JS ninja!");
}

//if the number is too low, alert 'guess again, too low'
else if (number < magicNumber) {
	alert("You guessed too low. Try again!");
}

//if the number is too high, alert 'guess again, too high'
else if (number > magicNumber) {
	alert("You guessed to high. Try again!");
}

else {
	alert("That is not a real number. Try again with an ACTUAL number!");
}
