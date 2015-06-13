var i = 1;
var j = 0;
var z;
var result = 0;
while(i<4000000){
    if(i%2 === 0){
        result +=i;
    }
    z = i;
    i = i+j;
    j = z;
}

alert("The sum of all the even fibbonacci numbers below 4000000 is:" + result);

*/

/* PROBLEM 2
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