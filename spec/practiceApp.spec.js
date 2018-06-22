//import js file to be able to test
// .current level, ..up a level
let summation = require("../practiceApp");

describe('codewars exercise, summation:', () =>{
	it('should be defined', () =>{
		expect(typeof summation).toBe('object');
	});

	it('should have explanation', () => {
		expect(summation.intro).toBe("add all numbers between 1-param")
	});


	it('should be a function', () =>{
		expect(typeof summation.summate).toBe("function");
	});

	it('should add all numbers between 1 and num', () =>{
	expect(summation.summate(3)).toEqual(6);
	});

});

describe('summate function', ()=>{

    it('should be called on', function(){
    	//create a spy before calling function        	
        spyOn(summation, 'summate');
        //call function
        summation.summate(); 
        expect(summation.summate).toHaveBeenCalled();
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