var username = "yash";
var output = ((username.length)>0) ? ("Hello, "+username+"!"):"Hello!";
console.log(output);
var userQuestion = "question which user asks";
console.log(userQuestion+" "+"```name of user "+username);
var randomnumber = Math.floor(Math.random() * 8);//return random number 
//from 0 to 7
var eightBall = "";
switch(randomnumber){
	case 0:
	       eightBall = "It is certain";
	       break;
	case 1:
	       eightBall = "It is decidedly so";
	       break;
	case 2:
	       eightBall = "Reply hazy try again";
	       break;
	case 3:
	       eightBall = "Cannot predict now";
	       break;
	case 4:
	       eightBall = "Do not count on it";
	       break;
	case 5:
	       eightBall  = "My sources say no";
	       break;
	case 6:
	       eightBall = "Outlook not so good";
	       break;
	case 7:
	       eightBall = "Signs point to yes";
	       break;
}
console.log(eightBall);

