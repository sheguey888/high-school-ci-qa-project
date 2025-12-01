/**
 * Calculator Module
 * Provides basic arithmetic operations
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If denominator is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculates the power of a number
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Result of base raised to exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} num - Number to find square root of
 * @returns {number} Square root of the number
 * @throws {Error} If number is negative
 */
function squareRoot(num) {
  if (num < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(num);
}

/**
 * Calculates the modulo (remainder) of division
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot calculate modulo with zero divisor');
  }
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
  modulo
};
