
class Person {
	
	constructor ( name, age){
		this.name = name;
		this.age = age;
	}
	
	print () {
		console.log('Name: ' + this.name + ", Age: " + this.age);
	}
}

class Doctor extends Person {
	
	constructor (name, age, profession) {
		super(name, age);
		this.profession = profession;
	}
	
	print () {
		console.log('Name: ' + this.name + ", Age: " + this.age + ", Profession: " + this.profession);
	}
}

class Engineer extends Person {
	
	constructor (name, age, profession) {
		super(name, age);
		this.profession = profession;
	}
	
	print () {
		console.log('Name: ' + this.name + ", Age: " + this.age + ", Profession: " + this.profession);
	}
}

var person1 = new Doctor("John", 35, "Doctor");
var person2 = new Engineer("Ramesh", 30, "Engineer");

person1.print();
person2.print();