//isEven() should display Boolean, whether or not a given number is even
function isEven(num) {
	return num % 2 === 0;
}

//factorial() should take the number supplied and multiply it by the numbers below it
// i.e., factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
let f = [];
function factorial(num){
	let result = 1;
	for(let i = 2; i <= num; i++){
		result *= i;
		}
		return result;
}

//kebabToSnake() should convert dashes to underscores
//i.e., linked-words = linked_words
function kebabToSnake(str) {
	 let newStr = str.replace(/-/gi, "_");
	 return newStr;
}