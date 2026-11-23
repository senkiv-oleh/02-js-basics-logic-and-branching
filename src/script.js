/**
 * Task 2.1: Явне перетворення у булеве значення (boolean).
 * @param {any} value
 * @returns {boolean}
 */
function toBoolean(value) {
  return Boolean(value)
}

/**
 * Task 2.2: Перетворення значення у число. Якщо результат NaN або не число, повернути 0.
 * @param {any} value
 * @returns {number}
 */
function toNumberOrZero(value) {
  const num = Number(value)
  return Number(value) || 0;
}

/**
 * Task 2.3: Перевірити, чи є значення хибним (falsy) в JavaScript.
 * @param {any} value
 * @returns {boolean}
 */
function isFalsy(value) {
  return !Boolean(value)
}

/**
 * Task 2.4: Повернути value, якщо воно не є null і не є undefined, інакше повернути defaultValue.
 * (Використовуйте оператор nullish coalescing `??`).
 * @param {any} value
 * @param {any} defaultValue
 * @returns {any}
 */
function getFallback(value, defaultValue) {
  return value ?? defaultValue
}
/**
 * Task 2.5: Визначити категорію числа:
 * - "positive_even" — додатне і парне
 * - "positive_odd"  — додатне і непарне
 * - "negative"      — від'ємне
 * - "zero"          — дорівнює 0
 * - "invalid"       — якщо передано не число або NaN
 * @param {any} num
 * @returns {string}
 */
function checkNumberCategory(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "invalid";
  } else if (num === 0) {
    return "zero";
  } else if (num < 0) {
    return "negative";
  } else {
    return num % 2 === 0 ? "positive_even" : "positive_odd";
  }
}

/**
 * Task 2.6: Повернути назву дня тижня за його номером (1 -> "Monday", ..., 7 -> "Sunday").
 * Для всіх інших значень повернути "Invalid day".
 * (Використовуйте оператор switch).
 * @param {number} day
 * @returns {string}
 */
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday"
      break;
    case 2:
      return "Tuesday"
      break;
    case 3:
      return "Wednesday"
      break;
    case 4:
      return "Thursday"
      break;
    case 5:
      return "Friday"
      break;
    case 6:
      return "Saturday"
      break;
    case 7:
      return "Sunday"
      break;
    default:
      return "Invalid day"
  }
}

/**
 * Task 2.7: Перевірити, чи є рік високосним.
 * Рік є високосним, якщо він ділиться на 4 і не ділиться на 100, АБО ділиться на 400.
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
    return true
  }
  else {
    return false
  }
}

/**
 * Task 2.8: Оцінювання успішності за результатом (score від 0 до 100):
 * - 90-100: "A"
 * - 80-89:  "B"
 * - 70-79:  "C"
 * - 60-69:  "D"
 * - 0-59:   "F"
 * - Якщо score поза межами 0-100 або не є числом: "Invalid score"
 * @param {number} score
 * @returns {string}
 */
function getGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
    return "Invalid score";
  }
  if (score <= 59) {
    return "F"
  }
  else if (score <= 69) {
    return "D"
  }
  else if (score <= 79) {
    return "C"
  }
  else if (score <= 89) {
    return "B"
  }
  else if (score <= 100) {
    return "A"
  }
  else {
    return "Invalid score"
  }
}

/**
 * Task 2.9: Обчислити підсумкову ціну зі знижкою:
 * - VIP покупці (isVIP === true): знижка 20% при покупці від 100$, інакше 10%.
 * - Звичайні покупці: знижка 10% при покупці від 200$, інакше знижки немає (0%).
 * @param {boolean} isVIP
 * @param {number} totalAmount
 * @returns {number}
 */
function calculateDiscount(isVIP, totalAmount) {
  if (isVIP === true) {
    return totalAmount * (totalAmount >= 100 ? 0.8 : 0.9);
  }

  return totalAmount >= 200 ? totalAmount * 0.9 : totalAmount;
}

/**
 * Task 2.10: Повернути команду для світлофора за кольором (незалежно від регістру):
 * - "red"    -> "STOP"
 * - "yellow" -> "READY"
 * - "green"  -> "GO"
 * - будь-який інший колір чи тип -> "UNKNOWN"
 * @param {string} color
 * @returns {string}
 */
function getTrafficSignal(color) {
  if (typeof color != "string") {
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
 * Task 2.11: Перевірити допуск до перегляду фільму:
 * - Якщо фільм НЕ має обмеження (isRestricted === false) -> true
 * - Якщо фільм обмежений: допуск є, якщо age >= 18 АБО (age >= 13 І hasParent === true)
 * @param {number} age
 * @param {boolean} hasParent
 * @param {boolean} isRestricted
 * @returns {boolean}
 */
function canAccessMovie(age, hasParent, isRestricted) {
  if (isRestricted === false) {
    return true
  }
  else {
    return age >= 18 || (age >= 13 && hasParent === true);
  }
}
/**
 * Task 2.12: Повернути пору року за номером місяця (1-12):
 * - 12, 1, 2:   "Winter"
 * - 3, 4, 5:    "Spring"
 * - 6, 7, 8:    "Summer"
 * - 9, 10, 11:  "Autumn"
 * - Інше значення: "Invalid month"
 * @param {number} month
 * @returns {string}
 */
function getSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "Winter"
  }
  else if (month === 3 || month === 4 || month === 5) {
    return "Spring"
  }
  else if (month === 6 || month === 7 || month === 8) {
    return "Summer"
  }
  else if (month === 9 || month === 10 || month === 11) {
    return "Autumn"
  }
  else {
    return "Invalid month"
  }
}

/**
 * Task 2.13: Простий калькулятор для операцій "+", "-", "*", "/":
 * - Якщо операція "/" і b === 0 -> повернути "Error: Division by zero"
 * - Якщо операція невідома -> повернути "Error: Invalid operation"
 * @param {number} a
 * @param {number} b
 * @param {string} operation
 * @returns {number|string}
 */
function simpleCalculator(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  } else {
    return "Error: Invalid operation";
  }
}

/**
 * Task 2.14: Форматування ціни з валютою:
 * - Якщо price некоректне (NaN, null, undefined, typeof !== 'number' або price < 0), повернути "Invalid price"
 * - currency за замовчуванням "$" (якщо не передано або порожній рядок)
 * - Приклад: (100, "€") -> "€100", (50) -> "$50"
 * @param {number} price
 * @param {string} [currency]
 * @returns {string}
 */
function formatPrice(price, currency) {
  if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
    return "Invalid price"
  }
  const symbol = currency || "$";
  return `${symbol}${price}`;
}

/**
 * Task 2.15: Перевірка порівняння двох значень:
 * - "strict" — якщо значення строго рівні (a === b)
 * - "loose" — якщо значення нестрого рівні (a == b), але НЕ строго рівні
 * - "none" — якщо значення не рівні
 * @param {any} a
 * @param {any} b
 * @returns {string}
 */
function checkEqualityType(a, b) {
  if (a === b) {
    return "strict"
  }
  if (a == b) {
    return "loose"
  }
  if (a != b) {
    return "none"
  }
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
}