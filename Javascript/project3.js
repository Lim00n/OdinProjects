function calculatePrime(number){
	var result = 0;
	if (number%2 === 0){
		var half = number/2;
	}
	else{
		var half = (number-1)/2;
	}
	while(half > 1){
		if (half === 5 &&
		number%half === 0){
			result = 5;
			break;
		}
		else if(half === 3 &&
		number%3 === 0){
			result = 3;
			break;
		}
		else if(half === 2 &&
		number%2 === 0){
			result = 2;
			break;
		}
		else if(number%half === 0 &&
		half% 2 !== 0 &&
		half% 3 !== 0 &&
		half% 5 !== 0){
			result = half;
			break;
			}
		else{
			half-=1;
		}
	}
	return result;	
}

console.log(calculatePrime(2000);