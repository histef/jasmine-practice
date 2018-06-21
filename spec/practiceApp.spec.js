//import js file to be able to test
// .current level, ..up a level
let Summation = require("../practiceApp");

describe('codewars exercise, summation:', () =>{
	it('should be defined', () =>{
		expect(summation).toBeDefined();
	});

	it('should be a function', () =>{
		expect(summation).toBeFunction();
	});

	it('should define sum', () =>{
		expect(sum).toBeDefined();
	});

	it('should add all numbers between 1 and num', () =>{
	expect(summation(3)).toEqual(6);
	});

});


/*let Add = require("../practiceApp");

describe('should add functionality', () => {
	it('calculates x+y = z', () =>{
		expect(Add(10,5)).toEqual(15);
	});

	it('calculates x+y != z', () => {
		expect(Add(10,5)).not.toEqual(15);
	}
});
*/