const {
  sumWithWhile,
  countDownString,
  doWhileAtLeastOnce,
  factorialWithFor,
  sumEvenUpTo,
  findFirstDivisible,
  collectCharsUntilStop,
  collectOddDigits,
  generateGridUntilTarget,
  countIterationsToTarget
} = require('../src/script');

describe('Task 3.1: sumWithWhile', () => {
  test('calculates sum for positive integer 5', () => {
    expect(sumWithWhile(5)).toBe(15);
  });

  test('calculates sum for n = 1', () => {
    expect(sumWithWhile(1)).toBe(1);
  });

  test('calculates sum for positive integer 10', () => {
    expect(sumWithWhile(10)).toBe(55);
  });

  test('returns 0 for n = 0', () => {
    expect(sumWithWhile(0)).toBe(0);
  });

  test('returns 0 for negative input n = -5', () => {
    expect(sumWithWhile(-5)).toBe(0);
  });
});

describe('Task 3.2: countDownString', () => {
  test('generates countdown string starting from 3', () => {
    expect(countDownString(3)).toBe('3 2 1');
  });

  test('generates countdown string starting from 5', () => {
    expect(countDownString(5)).toBe('5 4 3 2 1');
  });

  test('generates countdown string for start = 1', () => {
    expect(countDownString(1)).toBe('1');
  });

  test('returns empty string for start = 0', () => {
    expect(countDownString(0)).toBe('');
  });

  test('returns empty string for negative start', () => {
    expect(countDownString(-3)).toBe('');
  });
});

describe('Task 3.3: doWhileAtLeastOnce', () => {
  test('repeats string 3 times', () => {
    expect(doWhileAtLeastOnce('hi', 3)).toBe('hihihi');
  });

  test('repeats string 1 time', () => {
    expect(doWhileAtLeastOnce('abc', 1)).toBe('abc');
  });

  test('executes at least once when times is 0', () => {
    expect(doWhileAtLeastOnce('hello', 0)).toBe('hello');
  });

  test('executes at least once when times is negative', () => {
    expect(doWhileAtLeastOnce('test', -2)).toBe('test');
  });
});

describe('Task 3.4: factorialWithFor', () => {
  test('calculates factorial of 5', () => {
    expect(factorialWithFor(5)).toBe(120);
  });

  test('calculates factorial of 3', () => {
    expect(factorialWithFor(3)).toBe(6);
  });

  test('returns 1 for factorial of 1', () => {
    expect(factorialWithFor(1)).toBe(1);
  });

  test('returns 1 for factorial of 0 (0! = 1)', () => {
    expect(factorialWithFor(0)).toBe(1);
  });
});

describe('Task 3.5: sumEvenUpTo', () => {
  test('sums even numbers up to 10', () => {
    expect(sumEvenUpTo(10)).toBe(30);
  });

  test('sums even numbers up to 6', () => {
    expect(sumEvenUpTo(6)).toBe(12);
  });

  test('handles odd max by truncating to previous even (max = 7)', () => {
    expect(sumEvenUpTo(7)).toBe(12);
  });

  test('returns 2 when max = 2', () => {
    expect(sumEvenUpTo(2)).toBe(2);
  });

  test('returns 0 when max = 1', () => {
    expect(sumEvenUpTo(1)).toBe(0);
  });
});

describe('Task 3.6: findFirstDivisible', () => {
  test('finds first number >= 7 divisible by 3 (returns 9)', () => {
    expect(findFirstDivisible(7, 3)).toBe(9);
  });

  test('returns start number itself if it is already divisible (12, 4 -> 12)', () => {
    expect(findFirstDivisible(12, 4)).toBe(12);
  });

  test('finds first number >= 1 divisible by 5 (returns 5)', () => {
    expect(findFirstDivisible(1, 5)).toBe(5);
  });

  test('works with larger numbers (100, 7 -> 105)', () => {
    expect(findFirstDivisible(100, 7)).toBe(105);
  });
});

describe('Task 3.7: collectCharsUntilStop', () => {
  test('collects characters until space character', () => {
    expect(collectCharsUntilStop('hello world', ' ')).toBe('hello');
  });

  test('collects characters until target letter', () => {
    expect(collectCharsUntilStop('JavaScript', 'S')).toBe('Java');
  });

  test('returns whole string if stop character is not found', () => {
    expect(collectCharsUntilStop('testing', 'z')).toBe('testing');
  });

  test('returns empty string if stop character is the very first character', () => {
    expect(collectCharsUntilStop('!code', '!')).toBe('');
  });
});

describe('Task 3.8: collectOddDigits', () => {
  test('collects odd digits from "123456"', () => {
    expect(collectOddDigits('123456')).toBe('135');
  });

  test('collects odd digits from "987654321"', () => {
    expect(collectOddDigits('987654321')).toBe('97531');
  });

  test('returns empty string if input contains only even digits "2468"', () => {
    expect(collectOddDigits('2468')).toBe('');
  });

  test('returns all digits if input contains only odd digits "1357"', () => {
    expect(collectOddDigits('1357')).toBe('1357');
  });
});

describe('Task 3.9: generateGridUntilTarget', () => {
  test('stops nested loops when target coordinate (0, 1) is hit', () => {
    expect(generateGridUntilTarget(2, 2, 0, 1)).toBe('(0,0) (0,1)');
  });

  test('stops nested loops on second row target coordinate (1, 0)', () => {
    expect(generateGridUntilTarget(3, 3, 1, 0)).toBe('(0,0) (0,1) (0,2) (1,0)');
  });

  test('generates complete grid if stop coordinate is outside boundary', () => {
    expect(generateGridUntilTarget(2, 2, 5, 5)).toBe('(0,0) (0,1) (1,0) (1,1)');
  });

  test('stops immediately if stop coordinate is (0, 0)', () => {
    expect(generateGridUntilTarget(2, 2, 0, 0)).toBe('(0,0)');
  });
});

describe('Task 3.10: countIterationsToTarget', () => {
  test('counts iterations for 2 * 2 repeatedly until >= 9 (returns 3)', () => {
    expect(countIterationsToTarget(2, 2, 9)).toBe(3);
  });

  test('counts iterations for 5 * 3 repeatedly until >= 100 (returns 3)', () => {
    expect(countIterationsToTarget(5, 3, 100)).toBe(3);
  });

  test('returns 0 if start is already greater than or equal to target', () => {
    expect(countIterationsToTarget(10, 2, 5)).toBe(0);
  });

  test('returns 0 if start equals target', () => {
    expect(countIterationsToTarget(10, 2, 10)).toBe(0);
  });
});