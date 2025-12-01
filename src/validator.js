/**
 * Validator Module
 * Provides input validation utilities
 */

/**
 * Checks if a value is a valid number
 * @param {*} value - Value to check
 * @returns {boolean} True if value is a number
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Validates if two values are valid numbers for arithmetic operations
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if both values are valid numbers
 */
function areValidNumbers(a, b) {
  return isNumber(a) && isNumber(b);
}

/**
 * Checks if a value is a positive number
 * @param {*} value - Value to check
 * @returns {boolean} True if value is a positive number
 */
function isPositive(value) {
  return isNumber(value) && value > 0;
}

/**
 * Checks if a value is a non-negative number (zero or positive)
 * @param {*} value - Value to check
 * @returns {boolean} True if value is non-negative
 */
function isNonNegative(value) {
  return isNumber(value) && value >= 0;
}

/**
 * Validates input for division operation
 * @param {*} numerator - Numerator value
 * @param {*} denominator - Denominator value
 * @returns {Object} Validation result with valid flag and error message
 */
function validateDivision(numerator, denominator) {
  if (!areValidNumbers(numerator, denominator)) {
    return {
      valid: false,
      error: 'Both values must be valid numbers'
    };
  }
  if (denominator === 0) {
    return {
      valid: false,
      error: 'Denominator cannot be zero'
    };
  }
  return {
    valid: true,
    error: null
  };
}

module.exports = {
  isNumber,
  areValidNumbers,
  isPositive,
  isNonNegative,
  validateDivision
};
