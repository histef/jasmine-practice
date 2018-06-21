/*let add = (x,y) => {
	return x+y
}

module.exports = add;
*/

const summation = num => {
  let sum = 0;
  for(let i=1; i <= num; i++){
    sum += i;
  };
  return sum;
}

module.exports = summation;