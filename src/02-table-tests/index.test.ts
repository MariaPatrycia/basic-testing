// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';


const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 3, b: 1, action: Action.Subtract, expected: 2 },
  { a: 4, b: 5, action: Action.Multiply, expected: 20 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 3, action: 'invalid' as Action, expected: null }, 
]; 
test.each(testCases)(
  'should return $expected for $action of $a and $b',
  ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  }
);


