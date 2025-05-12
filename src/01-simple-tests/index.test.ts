// Uncomment the code below and write your tests
import { simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator( {a:4, b:2, action:"+"});
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator( {a:4, b:2, action:"-"});
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator( {a:4, b:2, action:"*"});
    expect(result).toBe(8);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator( {a:4, b:2, action:"/"});
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator( {a:4, b:2, action:"^"});
    expect(result).toBe(16);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 3, action: 'invalid' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: undefined as any, b: 5, action: 'multiply' })).toBeNull();
  });
});
