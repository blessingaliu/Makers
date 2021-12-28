const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    it('it should return "Fizz" if the number is divisible by 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('it should return "Buzz" if the number is divisible by 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('it should return "FizzBuzz" if the number is divisible by 15', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('it should return the number if the number is otherwise', () => {
      expect(fizzBuzz(2)).toBe(2);
    });
});