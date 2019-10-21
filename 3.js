let calculate = (x, y, operation)=>{
	if (operation == "add"){
		return (x+y);
		}
	else if (operation == "subtract"){
		return (x-y);
		}
	else if (operation == "multiply"){
		return (x*y);
		}
	else if (operation == "divide"){
		return (x/y);
		}
	else {
		console.log("Please enter a valid operator")
		}
	}
	console.log(calculate(3,4,"divide"))
	