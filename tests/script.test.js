const {
  toBoolean,
  toNumberOrZero,
  isFalsy,
  getFallback,
  checkNumberCategory,
  getDayName,
  isLeapYear,
  getGrade,
  calculateDiscount,
  getTrafficSignal,
  canAccessMovie,
  getSeason,
  simpleCalculator,
  formatPrice,
  checkEqualityType
} = require('../src/script');

describe('Task 2: Type Conversion, Logical Operations & Branching', () => {

  describe('2.1 toBoolean()', () => {
    test('converts non-empty string "hello" to true', () => {
      expect(toBoolean('hello')).toBe(true);
    });

    test('converts number 1 to true', () => {
      expect(toBoolean(1)).toBe(true);
    });

    test('returns boolean true as true', () => {
      expect(toBoolean(true)).toBe(true);
    });

    test('converts empty string "" to false', () => {
      expect(toBoolean('')).toBe(false);
    });

    test('converts number 0 to false', () => {
      expect(toBoolean(0)).toBe(false);
    });

    test('converts null to false', () => {
      expect(toBoolean(null)).toBe(false);
    });

    test('converts undefined to false', () => {
      expect(toBoolean(undefined)).toBe(false);
    });

    test('converts NaN to false', () => {
      expect(toBoolean(NaN)).toBe(false);
    });
  });

  describe('2.2 toNumberOrZero()', () => {
    test('converts numeric string "42" to number 42', () => {
      expect(toNumberOrZero('42')).toBe(42);
    });

    test('preserves valid number 15', () => {
      expect(toNumberOrZero(15)).toBe(15);
    });

    test('converts boolean true to number 1', () => {
      expect(toNumberOrZero(true)).toBe(1);
    });

    test('converts boolean false to number 0', () => {
      expect(toNumberOrZero(false)).toBe(0);
    });

    test('returns 0 for non-numeric string "abc"', () => {
      expect(toNumberOrZero('abc')).toBe(0);
    });

    test('returns 0 for undefined', () => {
      expect(toNumberOrZero(undefined)).toBe(0);
    });

    test('returns 0 for null', () => {
      expect(toNumberOrZero(null)).toBe(0);
    });

    test('returns 0 for NaN', () => {
      expect(toNumberOrZero(NaN)).toBe(0);
    });
  });

  describe('2.3 isFalsy()', () => {
    test('identifies boolean false as falsy', () => {
      expect(isFalsy(false)).toBe(true);
    });

    test('identifies number 0 as falsy', () => {
      expect(isFalsy(0)).toBe(true);
    });

    test('identifies empty string "" as falsy', () => {
      expect(isFalsy('')).toBe(true);
    });

    test('identifies null as falsy', () => {
      expect(isFalsy(null)).toBe(true);
    });

    test('identifies undefined as falsy', () => {
      expect(isFalsy(undefined)).toBe(true);
    });

    test('identifies NaN as falsy', () => {
      expect(isFalsy(NaN)).toBe(true);
    });

    test('identifies non-empty string "0" as truthy (returns false)', () => {
      expect(isFalsy('0')).toBe(false);
    });

    test('identifies number 1 as truthy (returns false)', () => {
      expect(isFalsy(1)).toBe(false);
    });

    test('identifies non-empty string "hello" as truthy (returns false)', () => {
      expect(isFalsy('hello')).toBe(false);
    });

    test('identifies boolean true as truthy (returns false)', () => {
      expect(isFalsy(true)).toBe(false);
    });
  });

  describe('2.4 getFallback()', () => {
    test('returns default when value is null', () => {
      expect(getFallback(null, 'default')).toBe('default');
    });

    test('returns default when value is undefined', () => {
      expect(getFallback(undefined, 'default')).toBe('default');
    });

    test('preserves 0 as valid non-nullish value', () => {
      expect(getFallback(0, 'default')).toBe(0);
    });

    test('preserves empty string "" as valid non-nullish value', () => {
      expect(getFallback('', 'default')).toBe('');
    });

    test('preserves boolean false as valid non-nullish value', () => {
      expect(getFallback(false, 'default')).toBe(false);
    });

    test('returns original string value when valid', () => {
      expect(getFallback('value', 'default')).toBe('value');
    });
  });

  describe('2.5 checkNumberCategory()', () => {
    test('categorizes 4 as "positive_even"', () => {
      expect(checkNumberCategory(4)).toBe('positive_even');
    });

    test('categorizes 7 as "positive_odd"', () => {
      expect(checkNumberCategory(7)).toBe('positive_odd');
    });

    test('categorizes -5 as "negative"', () => {
      expect(checkNumberCategory(-5)).toBe('negative');
    });

    test('categorizes 0 as "zero"', () => {
      expect(checkNumberCategory(0)).toBe('zero');
    });

    test('returns "invalid" for numeric string "10"', () => {
      expect(checkNumberCategory('10')).toBe('invalid');
    });

    test('returns "invalid" for NaN', () => {
      expect(checkNumberCategory(NaN)).toBe('invalid');
    });

    test('returns "invalid" for null', () => {
      expect(checkNumberCategory(null)).toBe('invalid');
    });
  });

  describe('2.6 getDayName()', () => {
    test('returns "Monday" for 1', () => {
      expect(getDayName(1)).toBe('Monday');
    });

    test('returns "Wednesday" for 3', () => {
      expect(getDayName(3)).toBe('Wednesday');
    });

    test('returns "Sunday" for 7', () => {
      expect(getDayName(7)).toBe('Sunday');
    });

    test('returns "Invalid day" for 0', () => {
      expect(getDayName(0)).toBe('Invalid day');
    });

    test('returns "Invalid day" for 8', () => {
      expect(getDayName(8)).toBe('Invalid day');
    });

    test('returns "Invalid day" for negative numbers (-1)', () => {
      expect(getDayName(-1)).toBe('Invalid day');
    });

    test('returns "Invalid day" for string input "1"', () => {
      expect(getDayName('1')).toBe('Invalid day');
    });
  });

  describe('2.7 isLeapYear()', () => {
    test('returns true for year 2020 (divisible by 4)', () => {
      expect(isLeapYear(2020)).toBe(true);
    });

    test('returns true for year 2000 (divisible by 400)', () => {
      expect(isLeapYear(2000)).toBe(true);
    });

    test('returns true for year 2024 (divisible by 4)', () => {
      expect(isLeapYear(2024)).toBe(true);
    });

    test('returns false for year 1900 (divisible by 100, not 400)', () => {
      expect(isLeapYear(1900)).toBe(false);
    });

    test('returns false for year 2021 (not divisible by 4)', () => {
      expect(isLeapYear(2021)).toBe(false);
    });

    test('returns false for year 2100 (divisible by 100, not 400)', () => {
      expect(isLeapYear(2100)).toBe(false);
    });
  });

  describe('2.8 getGrade()', () => {
    test('returns "A" for score 95', () => {
      expect(getGrade(95)).toBe('A');
    });

    test('returns "A" for boundary score 90', () => {
      expect(getGrade(90)).toBe('A');
    });

    test('returns "B" for score 85', () => {
      expect(getGrade(85)).toBe('B');
    });

    test('returns "C" for score 72', () => {
      expect(getGrade(72)).toBe('C');
    });

    test('returns "D" for score 60', () => {
      expect(getGrade(60)).toBe('D');
    });

    test('returns "F" for score 45', () => {
      expect(getGrade(45)).toBe('F');
    });

    test('returns "F" for score 0', () => {
      expect(getGrade(0)).toBe('F');
    });

    test('returns "Invalid score" for score -1', () => {
      expect(getGrade(-1)).toBe('Invalid score');
    });

    test('returns "Invalid score" for score 101', () => {
      expect(getGrade(101)).toBe('Invalid score');
    });

    test('returns "Invalid score" for numeric string "90"', () => {
      expect(getGrade('90')).toBe('Invalid score');
    });

    test('returns "Invalid score" for NaN', () => {
      expect(getGrade(NaN)).toBe('Invalid score');
    });
  });

  describe('2.9 calculateDiscount()', () => {
    test('applies 20% discount for VIP with total 100 (returns 80)', () => {
      expect(calculateDiscount(true, 100)).toBe(80);
    });

    test('applies 20% discount for VIP with total 150 (returns 120)', () => {
      expect(calculateDiscount(true, 150)).toBe(120);
    });

    test('applies 10% discount for VIP with total 50 (returns 45)', () => {
      expect(calculateDiscount(true, 50)).toBe(45);
    });

    test('applies 10% discount for regular user with total 200 (returns 180)', () => {
      expect(calculateDiscount(false, 200)).toBe(180);
    });

    test('applies 10% discount for regular user with total 300 (returns 270)', () => {
      expect(calculateDiscount(false, 300)).toBe(270);
    });

    test('applies 0% discount for regular user with total 150 (returns 150)', () => {
      expect(calculateDiscount(false, 150)).toBe(150);
    });
  });

  describe('2.10 getTrafficSignal()', () => {
    test('returns "STOP" for "red"', () => {
      expect(getTrafficSignal('red')).toBe('STOP');
    });

    test('returns "STOP" case-insensitively for "RED"', () => {
      expect(getTrafficSignal('RED')).toBe('STOP');
    });

    test('returns "READY" case-insensitively for "Yellow"', () => {
      expect(getTrafficSignal('Yellow')).toBe('READY');
    });

    test('returns "GO" for "green"', () => {
      expect(getTrafficSignal('green')).toBe('GO');
    });

    test('returns "UNKNOWN" for unhandled color "blue"', () => {
      expect(getTrafficSignal('blue')).toBe('UNKNOWN');
    });

    test('returns "UNKNOWN" for non-string input 123', () => {
      expect(getTrafficSignal(123)).toBe('UNKNOWN');
    });

    test('returns "UNKNOWN" for null', () => {
      expect(getTrafficSignal(null)).toBe('UNKNOWN');
    });
  });

  describe('2.11 canAccessMovie()', () => {
    test('allows access to unrestricted movie for age 10 without parent', () => {
      expect(canAccessMovie(10, false, false)).toBe(true);
    });

    test('allows access to restricted movie for age 18 without parent', () => {
      expect(canAccessMovie(18, false, true)).toBe(true);
    });

    test('allows access to restricted movie for age 25 without parent', () => {
      expect(canAccessMovie(25, false, true)).toBe(true);
    });

    test('allows access to restricted movie for age 15 with parent', () => {
      expect(canAccessMovie(15, true, true)).toBe(true);
    });

    test('allows access to restricted movie for age 13 with parent', () => {
      expect(canAccessMovie(13, true, true)).toBe(true);
    });

    test('denies access to restricted movie for age 15 without parent', () => {
      expect(canAccessMovie(15, false, true)).toBe(false);
    });

    test('denies access to restricted movie for age 12 even with parent', () => {
      expect(canAccessMovie(12, true, true)).toBe(false);
    });

    test('denies access to restricted movie for age 10 without parent', () => {
      expect(canAccessMovie(10, false, true)).toBe(false);
    });
  });

  describe('2.12 getSeason()', () => {
    test('returns "Winter" for month 12', () => {
      expect(getSeason(12)).toBe('Winter');
    });

    test('returns "Winter" for month 1', () => {
      expect(getSeason(1)).toBe('Winter');
    });

    test('returns "Winter" for month 2', () => {
      expect(getSeason(2)).toBe('Winter');
    });

    test('returns "Spring" for month 4', () => {
      expect(getSeason(4)).toBe('Spring');
    });

    test('returns "Summer" for month 7', () => {
      expect(getSeason(7)).toBe('Summer');
    });

    test('returns "Autumn" for month 10', () => {
      expect(getSeason(10)).toBe('Autumn');
    });

    test('returns "Invalid month" for month 0', () => {
      expect(getSeason(0)).toBe('Invalid month');
    });

    test('returns "Invalid month" for month 13', () => {
      expect(getSeason(13)).toBe('Invalid month');
    });

    test('returns "Invalid month" for non-number string "5"', () => {
      expect(getSeason('5')).toBe('Invalid month');
    });
  });

  describe('2.13 simpleCalculator()', () => {
    test('calculates 10 + 5 = 15', () => {
      expect(simpleCalculator(10, 5, '+')).toBe(15);
    });

    test('calculates 10 - 5 = 5', () => {
      expect(simpleCalculator(10, 5, '-')).toBe(5);
    });

    test('calculates 4 * 3 = 12', () => {
      expect(simpleCalculator(4, 3, '*')).toBe(12);
    });

    test('calculates 20 / 4 = 5', () => {
      expect(simpleCalculator(20, 4, '/')).toBe(5);
    });

    test('returns error message for division by zero', () => {
      expect(simpleCalculator(10, 0, '/')).toBe('Error: Division by zero');
    });

    test('returns error message for unsupported operation "^"', () => {
      expect(simpleCalculator(10, 5, '^')).toBe('Error: Invalid operation');
    });
  });

  describe('2.14 formatPrice()', () => {
    test('formats price 100 with euro symbol "€"', () => {
      expect(formatPrice(100, '€')).toBe('€100');
    });

    test('uses default currency "$" when currency parameter is omitted', () => {
      expect(formatPrice(50)).toBe('$50');
    });

    test('formats price 0 with pound symbol "£"', () => {
      expect(formatPrice(0, '£')).toBe('£0');
    });

    test('uses default currency "$" when currency is empty string', () => {
      expect(formatPrice(25, '')).toBe('$25');
    });

    test('returns "Invalid price" for negative price -10', () => {
      expect(formatPrice(-10)).toBe('Invalid price');
    });

    test('returns "Invalid price" for numeric string "100"', () => {
      expect(formatPrice('100')).toBe('Invalid price');
    });

    test('returns "Invalid price" for NaN', () => {
      expect(formatPrice(NaN)).toBe('Invalid price');
    });

    test('returns "Invalid price" for null', () => {
      expect(formatPrice(null)).toBe('Invalid price');
    });
  });

  describe('2.15 checkEqualityType()', () => {
    test('returns "strict" for two identical numbers 5 and 5', () => {
      expect(checkEqualityType(5, 5)).toBe('strict');
    });

    test('returns "strict" for two identical strings "abc" and "abc"', () => {
      expect(checkEqualityType('abc', 'abc')).toBe('strict');
    });

    test('returns "strict" for two booleans true and true', () => {
      expect(checkEqualityType(true, true)).toBe('strict');
    });

    test('returns "loose" for number 5 and string "5"', () => {
      expect(checkEqualityType(5, '5')).toBe('loose');
    });

    test('returns "loose" for number 0 and boolean false', () => {
      expect(checkEqualityType(0, false)).toBe('loose');
    });

    test('returns "loose" for null and undefined', () => {
      expect(checkEqualityType(null, undefined)).toBe('loose');
    });

    test('returns "none" for different numbers 5 and 10', () => {
      expect(checkEqualityType(5, 10)).toBe('none');
    });

    test('returns "none" for different strings "a" and "b"', () => {
      expect(checkEqualityType('a', 'b')).toBe('none');
    });
  });

});
