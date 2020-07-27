// Get the user’s choice.
const getUserChoice = (userInput) =>{
	userInput = userInput.toLowerCase();
	if(userInput =='rock' || userInput =='paper' || userInput=='scissors')
	{
		return userInput;
	}
	else
	{
		console.log("Error: please type a appropriate action !")
	}
}
// getUserChoice('paras');  its is working correctly
// getUserChoice('paper');


// Get the computer’s choice.
var getComputerChoice= () =>{
	var number = Math.floor(Math.random() * 3);
	if(number == 0){
		return 'rock';
	}
	else if(number == 1){
		return 'paper';
	}
	else if(number == 2){
		return 'scissors';
	}
} 
// console.log(getComputerChoice());
var determineWinner = (userChoice,computerChoice) =>{
	if(userChoice == computerChoice){
		return "tie";
	}
	if(userChoice=='rock'){
		if(computerChoice=='paper'){
			return "Computer Won";
		}
		else{
			return "User Won";
		}
	}
	if(userChoice=='paper'){
		if(computerChoice=='scissors'){
			return "Computer Won";
		}
		else if(computerChoice=='rock'){
			return "User Won";
		}
	}
	if(userChoice=='scissors'){
		if(computerChoice=='rock'){
			return "Computer Won";
		}
		else if(computerChoice=='paper'){
			return "User Won";
		}
	}
}
// determineWinner('paper','rock');




// Start the program and display the results.
var playGame = () =>{
	var userChoice = getUserChoice('scissors');
	console.log("user choice->",userChoice);
	var computerChoice = getComputerChoice();
	console.log("computer choice->",computerChoice);
	console.log(determineWinner(userChoice,computerChoice));
}
playGame();
