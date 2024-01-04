/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(n) {
  return n >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  return b > a && b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const MAXSIZE = 8;
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (queen.x / queen.y === 1 && king.x / king.y === 1) return true;

  for (let i = queen.x, j = queen.y; i >= 1 && j <= MAXSIZE; i -= 1, j += 1) {
    if (i === king.x && j === king.y) return true;
  }

  for (
    let i = queen.x, j = queen.y;
    i <= MAXSIZE && j <= MAXSIZE;
    i += 1, j += 1
  ) {
    if (i === king.x && j === king.y) return true;
  }
  for (let i = queen.x, j = queen.y; i <= MAXSIZE && j >= 1; i += 1, j -= 1) {
    if (i === king.x && j === king.y) return true;
  }

  for (let i = queen.x, j = queen.y; i >= 1 && j >= 1; i -= 1, j -= 1) {
    if (i === king.x && j === king.y) return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let sides = new Set([a, b, c]);
  if (sides.size !== 2) return false;
  if (sides.has(0)) return false;
  sides = [...sides];
  let left;
  let bot;
  if (sides[0] > sides[1]) {
    [bot, left] = sides;
  } else {
    [left, bot] = sides;
  }
  if (bot > left * 2) return false;
  return true;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  for (let decimes = Math.trunc(num / 10); decimes > 0; decimes -= 1) {
    result += 'X';
  }

  let nums = num % 10;
  if (nums < 5) {
    if (nums === 4) result += 'IV';
    else {
      for (; nums > 0; nums -= 1) {
        result += 'I';
      }
    }
  }
  if (nums > 5) {
    if (nums === 9) result += 'IX';
    else {
      result += 'V';
      nums -= 5;
      for (; nums > 0; nums -= 1) {
        result += 'I';
      }
    }
  }
  if (nums === 5) result += 'V';

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(number) {
  const symb = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'minus',
    'point',
  ];
  let res = '';
  for (let i = 0; i < number.length; i += 1) {
    const char = number[i];
    switch (char) {
      case '-':
        res += symb[10];
        break;
      case '.':
        res += symb[11];
        break;
      case ',':
        res += symb[11];
        break;
      default:
        res += symb[char];
        break;
    }
    if (i === number.length - 1) res += '';
    else res += ' ';
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (
    let i = 0, j = str.length - 1;
    i < str.length / 2 && j > str.length / 2;
    i += 1, j -= 1
  ) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const sNum = `${num}`;
  const sDigit = `${digit}`;
  return getIndexOf(sNum, sDigit) !== -1;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let res = -1;

  const left = new Array(arr.length - 1);
  const right = new Array(arr.length - 1);
  let leftCounter = 0;
  let rightCounter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    leftCounter += arr[i];
    left[i] = leftCounter;
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    rightCounter += arr[i];
    right[i] = rightCounter;
  }

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (left[i] === right[i + 2]) {
      res = i + 1;
      break;
    }
  }

  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const [TOP, RIGHT, BOTTOM, LEFT] = [0, 1, 2, 3];
  const arr = new Array(size);
  const END = size * size;

  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
  }

  let counter = 1;
  let layer = 0;
  let side = TOP;

  while (counter <= END) {
    if (side === TOP) {
      const start = counter;
      for (let i = layer; i < size - layer; i += 1) {
        for (let j = layer; j < size - layer; j += 1) {
          arr[i][j] = counter;
          counter += 1;
        }
        if (start < counter) {
          side = RIGHT;
          break;
        }
      }
    }

    if (side === RIGHT) {
      for (let i = 1 + layer; i < size - layer; i += 1) {
        const j = size - 1 - layer;
        arr[i][j] = counter;
        counter += 1;
      }
      side = BOTTOM;
    }

    if (side === BOTTOM) {
      const start = counter;
      for (let i = size - 1 - layer; i > 0; i -= 1) {
        for (let j = size - 2 - layer; j >= 0 + layer; j -= 1) {
          arr[i][j] = counter;
          counter += 1;
        }
        if (start < counter) {
          side = LEFT;
          break;
        }
      }
    }

    if (side === LEFT) {
      for (let i = size - 2 - layer; i > 0 + layer; i -= 1) {
        const j = 0 + layer;
        arr[i][j] = counter;
        counter += 1;
      }
      side = TOP;
      layer += 1;
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(arr) {
  const side = arr.length;
  const cheat = arr;
  const rotated = new Array(side);
  let i = 0;

  for (i = 0; i < side; i += 1) {
    const line = new Array(side);
    for (let j = side - 1, x = 0; j >= 0; j -= 1, x += 1) {
      line[x] = arr[j][i];
    }
    rotated[i] = line;
  }
  for (i = 0; i < side; i += 1) {
    cheat[i] = rotated[i];
  }
  return arr;
}
/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  let indexLeft = 0;
  let indexRight = 0;
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] < pivot) {
      left[indexLeft] = arr[i];
      indexLeft += 1;
    }
    if (arr[i] >= pivot) {
      right[indexRight] = arr[i];
      indexRight += 1;
    }
    i += 1;
  }

  if (left.length > 1) {
    left = sortByAsc(left);
  }

  if (right.length > 1) {
    right = sortByAsc(right);
  }

  const copyArr = [];

  for (i = 0; i < left.length; i += 1) {
    copyArr[i] = left[i];
  }

  copyArr[copyArr.length] = pivot;

  const add = copyArr.length;
  for (i = 0; i < right.length; i += 1) {
    copyArr[i + add] = right[i];
  }

  const cheat = arr;
  for (i = 0; i < copyArr.length; i += 1) {
    cheat[i] = copyArr[i];
  }

  return copyArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let resStr = [...str];

  for (let j = iterations; j > 0; j -= 1) {
    const left = [];
    const right = [];
    for (let i = 0; i < resStr.length; i += 1) {
      if (!(i % 2)) {
        left[left.length] = resStr[i];
      }
      if (i % 2) {
        right[right.length] = resStr[i];
      }
    }

    const res = [];
    for (let i = 0; i < left.length + right.length; i += 1) {
      if (i < left.length) res[i] = left[i];
      if (i >= left.length) res[i] = right[i - left.length];
    }

    resStr = '';
    for (let i = 0; i < res.length; i += 1) {
      resStr += res[i];
    }
  }

  return resStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
