// IMPORT MODULES under test here:
 import { sumFunction, subFunction, multFunction, divFunction } from '../testfunctions.js';

const test = QUnit.test;

test('it should return 12 when provided 8 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sumFunction(8,4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 50 when provided 32 and 16', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 50;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sumFunction(34,16);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 5 when provided 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subFunction(10,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 24 when provided 26 and 50', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -24;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subFunction(26,50);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 35 when provided 7 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 35;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multFunction(7,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -27 when provided -9 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -27;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multFunction(-9,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 2 when provided 6 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divFunction(6,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -20 when provided -100 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divFunction(-100,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
