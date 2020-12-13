/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let result = 1;
  for (let i = n; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;
  for (let i = n1; i <= n2; i += 1) {
    result += i;
  }
  return result;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const topDifference = rect1.top - rect2.top;
  const leftDifference = rect1.left - rect2.left;

  if (topDifference > 0 && leftDifference > 0) {
    const x = rect2.width - Math.abs(leftDifference);
    const y = rect2.height - Math.abs(topDifference);

    if (x > 0 && y > 0) {
      return true;
    }
  } else if (topDifference < 0 && leftDifference < 0) {
    const x = rect1.width - Math.abs(leftDifference);
    const y = rect1.height - Math.abs(topDifference);

    if (x > 0 && y > 0) {
      return true;
    }
  } else if (topDifference > 0 && leftDifference < 0) {
    const x = rect1.width - Math.abs(leftDifference);
    const y = rect2.height - Math.abs(topDifference);

    if (x > 0 && y > 0) {
      return true;
    }
  } else {
    // if (topDifference < 0 && leftDifference > 0)
    const x = rect2.width - Math.abs(leftDifference);
    const y = rect1.height - Math.abs(topDifference);

    if (x > 0 && y > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const differenceX = Math.abs(circle.center.x - point.x);
  const differenceY = Math.abs(circle.center.y - point.y);
  const distanceFromCenter = Math.sqrt(differenceX ** 2 + differenceY ** 2);

  if (distanceFromCenter < circle.radius) {
    return true;
  }
  return false;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const arrFromStr = str.slice().split('');
    arrFromStr[i] = null;

    if (arrFromStr.indexOf(str[i]) === -1) {
      return str[i];
    }
  }

  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let result = '';

  if (isStartIncluded) {
    result += '[';
  } else {
    result += '(';
  }

  if (a < b) {
    result = `${result}${a}, ${b}`;
  } else {
    result = `${result}${b}, ${a}`;
  }

  if (isEndIncluded) {
    result += ']';
  } else {
    result += ')';
  }

  return result;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const strFromNum = String(num);
  let result = '';
  for (let i = strFromNum.length - 1; i >= 0; i -= 1) {
    result += strFromNum[i];
  }
  return result;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const ccnArray = String(ccn).split('');
  let sum = 0;

  for (let i = ccnArray.length - 2; i >= 0; i -= 2) {
    const number = Number(ccnArray[i]);
    if (number * 2 > 9) {
      ccnArray[i] = String(number * 2 - 9);
    } else {
      ccnArray[i] = String(number * 2);
    }
  }

  for (let i = ccnArray.length - 1; i >= 0; i -= 1) {
    const number = Number(ccnArray[i]);
    sum += number;
  }

  if (sum % 10 === 0) {
    return true;
  }

  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const firstReduceResult = String(num)
    .split('')
    .reduce((acc, elem) => Number(acc) + Number(elem));
  const secondReduceResult = String(firstReduceResult)
    .split('')
    .reduce((acc, elem) => Number(acc) + Number(elem));
  return secondReduceResult;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(strInput) {
  const stack = [];
  const openingBrackets = ['(', '[', '{', '<'];
  const closingBrackets = [')', ']', '}', '>'];

  for (let i = 0; i < strInput.length; i += 1) {
    if (openingBrackets.indexOf(strInput[i]) >= 0) {
      stack.push(strInput[i]);
    }
    if (closingBrackets.indexOf(strInput[i]) >= 0) {
      const closingBrackIndex = closingBrackets.indexOf(strInput[i]);
      const openingBrackIndex = openingBrackets.indexOf(stack[stack.length - 1]);
      if (closingBrackIndex === openingBrackIndex) {
        stack.pop();
      } else {
        stack.push(strInput[i]);
        break;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const sourceArr = [];
  for (let i = 0; i < 10; i += 1) {
    sourceArr.push(`${i}`);
  }
  const targetArr = [];
  for (let i = 0; i < n; i += 1) {
    targetArr.push(`${i}`);
  }
  const input = String(num);
  const inputArr = input.split('');

  for (let i = 0; i < inputArr.length; i += 1) {
    inputArr[i] = sourceArr.indexOf(inputArr[i]);
  }

  const sourceSymbCount = sourceArr.length;
  const targetSymbCount = targetArr.length;

  let decimalNum;
  const transitionalArr = [];

  // Converting input to decimal
  for (let i = 0, j = inputArr.length - 1; i < inputArr.length; i += 1, j -= 1) {
    inputArr[i] *= sourceSymbCount ** j;
  }
  decimalNum = inputArr.reduce((acc, elem) => acc + elem, 0);

  // Converting from decimal

  while (decimalNum > targetSymbCount - 1) {
    transitionalArr.push(decimalNum % targetSymbCount);
    decimalNum = Math.floor(decimalNum / targetSymbCount);
  }

  transitionalArr.push(decimalNum);
  transitionalArr.reverse();


  for (let i = 0; i < transitionalArr.length; i += 1) {
    transitionalArr[i] = targetArr[transitionalArr[i]];
  }

  return transitionalArr.join('');
}

/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */

function getCommonDirectoryPath(pathes) {
  let devidedPathes = pathes.slice();
  devidedPathes = devidedPathes.map((element) => element.split('/'));
  let commonPath = '';

  for (let i = 0; i < devidedPathes[0].length; i += 1) {
    if (
      devidedPathes.length === 2
      && devidedPathes[0][i] === devidedPathes[1][i]
    ) {
      commonPath = `${commonPath}${devidedPathes[0][i]}/`;
    } else if (
      devidedPathes.length === 3
      && devidedPathes[0][i] === devidedPathes[1][i]
      && devidedPathes[0][i] === devidedPathes[2][i]
    ) {
      commonPath = `${commonPath}${devidedPathes[0][i]}/`;
    } else {
      break;
    }
  }
  return commonPath;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const m1Rows = m1.length;
  const m1Columns = m1[0].length;
  const m2Rows = m2.length;
  const m2Columns = m2[0].length;
  const composition = [];

  if (m1Columns !== m2Rows) {
    return false;
  }

  for (let i = 0; i < m1Rows; i += 1) {
    composition[i] = [];
  }

  for (let k = 0; k < m2Columns; k += 1) {
    for (let i = 0; i < m1Rows; i += 1) {
      let temp = 0;
      for (let j = 0; j < m2Rows; j += 1) {
        temp += m1[i][j] * m2[j][k];
        composition[i][k] = temp;
      }
    }
  }

  return composition;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const horisontalWinPositions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
  ];

  const verticalWinPositions = [
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
  ];

  const diagonalWinPositions = [
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  function positionContent(array) {
    const [i, j] = array;

    if (position[i][j] === 'X' || position[i][j] === '0') {
      return position[i][j];
    }

    return NaN;
  }

  function checkWinPosition(winPosition) {
    for (let i = 0; i < winPosition.length; i += 1) {
      const firstCell = winPosition[i][0];
      const secondCell = winPosition[i][1];
      const thirdCell = winPosition[i][2];

      if (
        positionContent(firstCell) === positionContent(secondCell)
        && positionContent(firstCell) === positionContent(thirdCell)
      ) {
        return positionContent(firstCell);
      }
    }

    return undefined;
  }

  if (checkWinPosition(horisontalWinPositions)) {
    return checkWinPosition(horisontalWinPositions);
  }

  if (checkWinPosition(verticalWinPositions)) {
    return checkWinPosition(verticalWinPositions);
  }

  if (checkWinPosition(diagonalWinPositions)) {
    return checkWinPosition(diagonalWinPositions);
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
