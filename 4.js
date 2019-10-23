// Let's get the number we're evaluating first
let checkPandigital = (inputNumber)=>{
	// We need to look for repeating digits to determine if pandigital
	let inputNumberArray = inputNumber.toString().split('').sort()
	for (let i =0; i < inputNumberArray.length - 1; i++){
		
		if (inputNumberArray[i] === inputNumberArray[i+1]){
			console.log(inputNumberArray);
			return false;
		} 

		else {
			if (parseInt(inputNumberArray[i]) != i+1){
				console.log(inputNumberArray);
				return false;
			}
		}
	}
	console.log(inputNumberArray);
	return true;
}
//checkPandigital(231)
//checkPandigital(942)
//checkPandigital(294883)

//let number = 123456788; 
//console.log(checkPandigital(number));





