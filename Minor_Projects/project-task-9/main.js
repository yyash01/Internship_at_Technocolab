let raceNumber = Math.floor(Math.random() * 1000);//it will generate number from 0 to 999 randomly
let runner_early = true;
var runner_age = 20;
if(runner_age>18 && runner_early)
{
	raceNumber = raceNumber+1000;
}
if(runner_age>18 && runner_early){
	console.log("Race will start 9:30 am and your number will be "+raceNumber);
}
else if(runner_age>18 && runner_early==false){
	console.log("Late adults run at 11:00 am and your number will be "+raceNumber);
}
else if(runner_age<18){
	console.log("Youth registrants run at 12:30 pm (regardless of registration) and your race number will be " + raceNumber);
}
else{
	console.log("18 years of age Please Visit Registration Desk ");
}

