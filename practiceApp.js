/*let add = (x,y) => {
	return x+y
}

module.exports = add;
*/

/* doesn't allow jasmine to see variables inside fn bc of scope
*const summation = num => {
*  let sum = 0;
*  for(let i=1; i <= num; i++){
*    sum += i;
*  };
*  return sum;
}*/

//change to object to allow Jasmine to see variables.
let summation = {
	intro: "add all numbers between 1-param",
	summate: function(num){
		let sum = 0;
		for(let i=1; i <= num; i++){
		    sum += i;
		  };
		  return sum;
		}		
	}

module.exports = summation;