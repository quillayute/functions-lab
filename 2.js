let reverseString = (string)=>{
	 let reversed = "";
	 for (var i = string.length -1; i >= 0; i--){
	 	reversed += string[i];
	 }
	 return reversed
}
console.log(reverseString("Bacon"));