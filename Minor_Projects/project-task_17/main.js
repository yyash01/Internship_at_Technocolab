class School{
	constructor(name,level,numberofStudents){
		this._name = name;
		this._level = level;
		this._numberofStudents = numberofStudents;
	}
	get name(){
		return this._name;
	}
	get level(){
		return this._level;
	}
	get numberofStudents(){
		return this._numberofStudents;
	}

	set numberofStudents(num){
		if(isNaN(num)){
			console.log('Invalid input: numberOfStudents must be set to a Number.');
		}
		else{
			this._numberofStudents = num;
		}
	}
	quickFacts(){
		console.log(`${this.name} educates ${this.numberofStudents} students at the ${this.level} school level.`)	
	}	
	static pickSubstituteTeacher(substituteTeacher){
		const randInt = Math.floor(Math.random()*substituteTeacher.length);
		return substituteTeacher[randInt];
	 }  //how to generate randomly the strings from an array......
}

class PrimarySchool extends School{
	constructor(name,numberofStudents,pickupPolicy){
		super(name,'primary',numberofStudents)
		this._pickupPolicy = pickupPolicy;
	}
	get pickupPolicy(){
		return this._pickupPolicy;
	}		
}

class HighSchool extends School{
	constructor(name,numberofStudents,sportsTeams){
		super(name,'High',numberofStudents);
		this._sportsTeams = sportsTeams;
	}
	get sportsTeams(){
		return this._sportsTeams;
	}
}

// using the concepts we use this ---------->>>>>>>

var lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
var subTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

var alSmith = new HighSchool('Al E. Smith',434,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
console.log(alSmith.numberofStudents);
alSmith.quickFacts();
console.log(subTeacher);