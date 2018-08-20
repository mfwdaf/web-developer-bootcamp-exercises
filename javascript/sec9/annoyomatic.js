// //Version 1
// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }
// 	alert("YAY! We finally made it!");


	// Version 2 - accepts any characters as long as "yes" is included
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("YAY! We made it!");