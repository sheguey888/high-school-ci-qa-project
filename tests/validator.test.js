/**
 * Unit Tests for Validator Module
 */

const validator = require('../src/validator');

describe('Validator Module', () => {
  describe('isNumber()', () => {
    test('should return true for valid numbers', () => {
      expect(validator.isNumber(5)).toBe(true);
      expect(validator.isNumber(0)).toBe(true);
      expect(validator.isNumber(-10)).toBe(true);
      expect(validator.isNumber(3.14)).toBe(true);
    });

    test('should return false for non-numbers', () => {
      expect(validator.isNumber('5')).toBe(false);
      expect(validator.isNumber(null)).toBe(false);
      expect(validator.isNumber(undefined)).toBe(false);
      expect(validator.isNumber({})).toBe(false);
      expect(validator.isNumber([])).toBe(false);
    });

    test('should return false for NaN and Infinity', () => {
      expect(validator.isNumber(NaN)).toBe(false);
      expect(validator.isNumber(Infinity)).toBe(false);
      expect(validator.isNumber(-Infinity)).toBe(false);
    });
  });

  describe('areValidNumbers()', () => {
    test('should return true when both values are valid numbers', () => {
      expect(validator.areValidNumbers(5, 10)).toBe(true);
      expect(validator.areValidNumbers(-5, 3.14)).toBe(true);
      expect(validator.areValidNumbers(0, 0)).toBe(true);
    });

    test('should return false when any value is not a number', () => {
      expect(validator.areValidNumbers(5, '10')).toBe(false);
      expect(validator.areValidNumbers('5', 10)).toBe(false);
      expect(validator.areValidNumbers(null, 5)).toBe(false);
      expect(validator.areValidNumbers(5, undefined)).toBe(false);
    });

    test('should return false for NaN or Infinity', () => {
      expect(validator.areValidNumbers(5, NaN)).toBe(false);
      expect(validator.areValidNumbers(Infinity, 5)).toBe(false);
    });
  });

  describe('isPositive()', () => {
    test('should return true for positive numbers', () => {
      expect(validator.isPositive(5)).toBe(true);
      expect(validator.isPositive(0.1)).toBe(true);
      expect(validator.isPositive(1000)).toBe(true);
    });

    test('should return false for zero and negative numbers', () => {
      expect(validator.isPositive(0)).toBe(false);
      expect(validator.isPositive(-5)).toBe(false);
      expect(validator.isPositive(-0.1)).toBe(false);
    });

    test('should return false for non-numbers', () => {
      expect(validator.isPositive('5')).toBe(false);
      expect(validator.isPositive(null)).toBe(false);
    });
  });

  describe('isNonNegative()', () => {
    test('should return true for positive numbers and zero', () => {
      expect(validator.isNonNegative(0)).toBe(true);
      expect(validator.isNonNegative(5)).toBe(true);
      expect(validator.isNonNegative(0.1)).toBe(true);
    });

    test('should return false for negative numbers', () => {
      expect(validator.isNonNegative(-1)).toBe(false);
      expect(validator.isNonNegative(-0.1)).toBe(false);
    });

    test('should return false for non-numbers', () => {
      expect(validator.isNonNegative('0')).toBe(false);
      expect(validator.isNonNegative(null)).toBe(false);
    });
  });

  describe('validateDivision()', () => {
    test('should return valid for proper division inputs', () => {
      const result = validator.validateDivision(10, 2);
      expect(result.valid).toBe(true);
      expect(result.error).toBe(null);
    });

    test('should return invalid for zero denominator', () => {
      const result = validator.validateDivision(10, 0);
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Denominator cannot be zero');
    });

    test('should return invalid for non-number inputs', () => {
      const result = validator.validateDivision('10', 2);
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Both values must be valid numbers');
    });

    test('should return invalid when either value is not a number', () => {
      const result1 = validator.validateDivision(null, 5);
      expect(result1.valid).toBe(false);

      const result2 = validator.validateDivision(5, undefined);
      expect(result2.valid).toBe(false);
    });
  });
});
