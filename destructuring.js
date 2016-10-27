//Lets Define an object as
var room = {
	length: 20,
	breadth: 10,
	label: "Room 1"
};

//Using older syntax, if we want to store each field values in variables
var l = room.length;
var b = room.breadth;
var label = room.label;

//While using ES6 destructuring syntax we create variables based room //object as
let { length, breadth, label } = room;

//Note: Name of variables should be same as that of fields of room object

//If you want to store in different variables then you can do as
let { length : l, breadth: b, label : name } = room;


///////////////////////////////////////////////////////////////////
//Array Destructuring

var arr = [ 'a', 'b'];

let [ x, y ] = arr;
// x = 'a'; y = 'b'

