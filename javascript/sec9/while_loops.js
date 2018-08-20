/* Exercise 1
Print all numbers between -10 and 19 */
console.log("Exercise 1");
var ex1 = -10;

while(ex1 < 20) {
	console.log(ex1)
	ex1++;
}

/* Exercise 2
Print all even numbers between 10 and 40 */
console.log("Exercise 2");
var ex2 = 10;

while(ex2 <= 40) {
	if(ex2 % 2 === 0) {
	console.log(ex2);
	}
	ex2++;
}

/* Exercise 3
Print all odd numbers between 300 and 333 */
console.log("Exercise 3");
var ex3 = 300;
	ex3++;

while(ex3 <= 333) {
	if(ex3 % 2 === 1) {
	console.log(ex3); 
	}
	ex3++;
}

/*Exercise 4
Print all numbers divisible by 3 and 5 between 5 and 50 */
console.log("Exercise 4");
var ex4 = 5;

while(ex4 <= 50) {
 	if(ex4 % 3 === 0 && ex4 % 5 === 0) {
 	console.log(ex4);
 	}
 	ex4++;
 }
 