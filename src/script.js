
/**
 * Task 2.1: Явне перетворення у булеве значення.
 */
function toBoolean(value) {
  return Boolean(value);
}

/**
 * Task 2.2: Перетворення значення у число.
 */
function toNumberOrZero(value) {
  const number = Number(value);
  return Number.isNaN(number) ? 0 : number;
}

/**
 * Task 2.3: Перевірити, чи є значення falsy.
 */
function isFalsy(value) {
  return !value;
}

/**
 * Task 2.4: Повернути значення або значення за замовчуванням.
 */
function getFallback(value, defaultValue) {
  return value ?? defaultValue;
}

/**
 * Task 2.5: Категорія числа.
 */
function checkNumberCategory(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "invalid";
  }

  if (num === 0) {
    return "zero";
  }

  if (num < 0) {
    return "negative";
  }

  return num % 2 === 0 ? "positive_even" : "positive_odd";
}

/**
 * Task 2.6: Назва дня тижня.
 */
function getDayName(day) {
  switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day";
  }
}

/**
 * Task 2.7: Перевірка високосного року.
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Task 2.8: Оцінка за результатом.
 */
function getGrade(score) {
  if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
}

/**
 * Task 2.9: Розрахунок знижки.
 */
function calculateDiscount(isVIP, totalAmount) {
  let discount = 0;

  if (isVIP) {
    discount = totalAmount >= 100 ? 0.2 : 0.1;
  } else {
    discount = totalAmount >= 200 ? 0.1 : 0;
  }

  return totalAmount * (1 - discount);
}

/**
 * Task 2.10: Команда світлофора.
 */
function getTrafficSignal(color) {
  if (typeof color !== "string") {
    return "UNKNOWN";
  }

  switch (color.toLowerCase()) {
    case "red": return "STOP";
    case "yellow": return "READY";
    case "green": return "GO";
    default: return "UNKNOWN";
  }
}

/**
 * Task 2.11: Допуск до перегляду фільму.
 */
function canAccessMovie(age, hasParent, isRestricted) {
  if (isRestricted === false) {
    return true;
  }

  return age >= 18 || (age >= 13 && hasParent === true);
}

/**
 * Task 2.12: Пора року.
 */
function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";

    case 3:
    case 4:
    case 5:
      return "Spring";

    case 6:
    case 7:
    case 8:
      return "Summer";

    case 9:
    case 10:
    case 11:
      return "Autumn";

    default:
      return "Invalid month";
  }
}

/**
 * Task 2.13: Простий калькулятор.
 */
function simpleCalculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b === 0 ? "Error: Division by zero" : a / b;

    default:
      return "Error: Invalid operation";
  }
}

/**
 * Task 2.14: Форматування ціни.
 */
function formatPrice(price, currency) {
  if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
    return "Invalid price";
  }

  const symbol = currency || "$";

  return `${symbol}${price}`;
}

/**
 * Task 2.15: Перевірка рівності.
 */
function checkEqualityType(a, b) {
  if (a === b) {
    return "strict";
  }

  if (a == b) {
    return "loose";
  }

  return "none";
}

module.exports = {
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
};
