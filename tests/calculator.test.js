/**
 * Unit Tests for Calculator Module
 */

const calculator = require('../src/calculator');

describe('Calculator Module', () => {
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should handle zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test('should multiply negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should handle zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });
  });

  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should divide negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('power()', () => {
    test('should calculate power of positive numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should handle power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should handle decimal base', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });
  });

  describe('squareRoot()', () => {
    test('should calculate square root of positive numbers', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.squareRoot(6.25)).toBe(2.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });

  describe('modulo()', () => {
    test('should calculate modulo of positive numbers', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should return zero when dividend is divisible', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.modulo(7.5, 2)).toBeCloseTo(1.5);
    });

    test('should throw error for zero divisor', () => {
      expect(() => calculator.modulo(5, 0)).toThrow('Cannot calculate modulo with zero divisor');
    });
  });
});
