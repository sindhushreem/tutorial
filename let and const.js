
//Using var variables
function function1 () {
	var a = 10;
	
	if( condition ){
		console.log(a);		// 10
		var b = 20;
	}
	
	console.log(b);		// 20
}


function function2 () {
	let a = 10;
	
	if( condition ){
		console.log(a);		// 10
		let b = 20;
	}
	
	console.log(b);		// undefined
}

//const variables are similar to let, only difference being their values cannot be changed, meaning they cannot be re-assigned