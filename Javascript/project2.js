function sumOfNumbers(number){
	var result = 0;

	for(i = 0; i < 1000; i++){
		if (i%3 === 0 || i%5 === 0){
			result+=i;
		}	
	}
	return result;
}

alert("the sum of numbers devisable by 3 or 5 up to 100 is: " + sumOfNumbers(100));