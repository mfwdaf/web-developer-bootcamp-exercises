//determine user's age and convert to number
var age = Number(prompt("What is your age?"));

//if age is negative, print an error message
if (age < 0) {
	alert("Anomaly detected. You should not be here!");
	}
//if age is 21, print Happy 21st Birthday
if (age === 21) {
	alert("Happy 21st Brithday! Here is a free shot on the house!");
	}
//if age is odd, print you have an odd age
if (age % 2 !== 0) {
	alert("You have an odd age!");
	}
//if age is a perfect square, print "Perfect square!"
if (age % Math.sqrt(age) === 0) {
	alert("Your age is a perfect square, and that is rare!");
	}