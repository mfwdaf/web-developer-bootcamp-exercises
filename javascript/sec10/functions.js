//isEven() should display a Boolean of whether or not a number is even
function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}
	else(return(false));
}

//factorial() should take the number supplied and multiply it by the numbers below it
// i.e., factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(i) {
	if(i === 0) {
		return 1;
	}
	if(i < 0) {
		return undefined;
	}
	for(var x = i; x--;) {
		i*=x
	}
	return i;
}

//kebabToSnake() should convert dashes to underscores
//i.e., linked-words = linked_words
