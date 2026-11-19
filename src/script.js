
/**
 * Task 2.1
 */
function toBoolean(value) {
  return Boolean(value);
}

/**
 * Task 2.2
 */
function toNumberOrZero(value) {
  const number = Number(value);

  if (Number.isNaN(number)) {
    return 0;
  }

  return number;
}

/**
 * Task 2.3
 */
function isFalsy(value) {
  return !value;
}

/**
 * Task 2.4
 */
function getFallback(value, defaultValue) {
  return value ?? defaultValue;
}

/**
 * Task 2.5
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

  if (num % 2 === 0) {
    return "positive_even";
  }

  return "positive_odd";
}

/**
 * Task 2.6
 */
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

/**
 * Task 2.7
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Task 2.8
 */
function getGrade(score) {
  if (
    typeof score !== "number" ||
    Number.isNaN(score) ||
    score < 0 ||
    score > 100
  ) {
    return "Invalid score";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Task 2.9
 */
function calculateDiscount(isVIP, totalAmount) {
  if (isVIP === true) {
    if (totalAmount >= 100) {
      return totalAmount * 0.8;
    }

    return totalAmount * 0.9;
  }

  if (totalAmount >= 200) {
    return totalAmount * 0.9;
  }

  return totalAmount;
}

/**
 * Task 2.10
 */
function getTrafficSignal(color) {
  if (typeof color !== "string") {
    return "UNKNOWN";
  }

  switch (color.toLowerCase()) {
    case "red":
      return "STOP";
    case "yellow":
      return "READY";
    case "green":
      return "GO";
    default:
      return "UNKNOWN";
  }
}

/**
 * Task 2.11
 */
function canAccessMovie(age, hasParent, isRestricted) {
  if (isRestricted === false) {
    return true;
  }

  return age >= 18 || (age >= 13 && hasParent === true);
}

/**
 * Task 2.12
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
 * Task 2.13
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
      if (b === 0) {
        return "Error: Division by zero";
      }

      return a / b;

    default:
      return "Error: Invalid operation";
  }
}

/**
 * Task 2.14
 */
function formatPrice(price, currency) {
  if (
    typeof price !== "number" ||
    Number.isNaN(price) ||
    price === null ||
    price < 0
  ) {
    return "Invalid price";
  }

  if (!currency) {
    currency = "$";
  }

  return currency + price;
}

/**
 * Task 2.15
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
