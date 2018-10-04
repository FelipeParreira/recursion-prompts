/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if(n < 0) {
    return null;
  } else if(n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copyOfArray = array.slice();
  if(copyOfArray.length === 0) {
    return 0;
  } else {
    var element = copyOfArray.pop();
    return element + sum(copyOfArray);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var copyOfArray = array.slice();
  var sum = 0;
  while(copyOfArray.length > 0) {
    var element = copyOfArray.shift();
    if(Array.isArray(element)) {
      sum += arraySum(element);
    } else {
      sum += element;
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if(n === 0) {
    return true;
  } else if(n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0) {
    return 0;
  } else {
    return n - Math.abs(n)/n + sumBelow(n - Math.abs(n)/n);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var increment = x < y ? 1 : -1;
  if(Math.abs(x - y) <= 1) {
    return [];
  } else {
    if(x + increment === y - increment) {
      return [x + increment];
    }
    return [x + increment].concat(range(x + increment, y - increment)).concat([y - increment]);
  }
  // if(x.array === undefined) {
  //   x = { value: x, array: [] };
  // }

  // if(Math.abs(x.value - y) > 1) {
  //  var increment = - Math.abs(x.value - y)/(x.value - y);
  //   x.array.push(x.value + increment);
  //   return range({ value: x.value + increment, array: x.array }, y);
  // } else {
  //   return x.array;
  // }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp < 0) {
    base = 1/base;
    exp = -exp;
  }

  if(exp === 0) {
    return 1;
  } else if(exp === 1) {
    return base;
  }
  var result;
  if(exp % 2 === 0) {
    result = exponent(base * base, exp/2);
  } else {
    result = base * exponent(base, (exp - 1));
  }
  var multiplier = 100000;
  return (result * multiplier - ((result * multiplier) % 1)) / multiplier;
  
  
  // if(base.opt === undefined) {
  //   var originalBase = base;
  //   base = { value: base * base, opt: true };
  //   if(exp % 2 === 0) {
  //     return exponent(base, exp/2);
  //   } else {
  //     return originalBase * exponent(base, (exp - 1)/2);
  //   }
  // }

  // if(exp === 0) {
  //   return 1;
  // } else {
  //   var increment = exp > 0 ? -1 : 1; 
  //   var multiplier = exp > 0 ? base.value : 1/base.value;
  //   return multiplier * exponent(base, exp + increment);
  // }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1) {
    return true;
  } else {
    if(n % 2 !== 0 || n === 0) {
      return false;
    } else {
      return powerOfTwo(n / 2);
    }
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(typeof string === 'string') {
    string = string.split('');
  }

  if(string.length <= 1) {
    return string.join('');
  } else {
    var firstElement = string.shift();
    var lastElement = string.pop();
    return lastElement + reverse(string) + firstElement;
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if(typeof string === 'string') {
    string = string.toLowerCase();
    string = string.split('').filter(char => char !== ' ');
  }
  if(string.length <= 1) {
    return true;
  } else {
    var firstElement = string.shift();
    var lastElement = string.pop();
    if(firstElement !== lastElement) {
      return false;
    } else {
      return palindrome(string);
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var absX = x > 0 ? x : -x;
  var absY = y > 0 ? y : -y;
  if(y === 0) {
    return NaN;
  } else if(absX >= absY) {
    var signOfX = x > 0 ? 1 : -1;
    var increment = signOfX > 0 ? - absY : absY;
    return modulo(x + increment, y);
  } else {
    return x;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(x === 0 || y === 0) {
    return 0;
  } else {
    var element = y > 0 ? x : -x;
    if(y === 1 || y === -1) {
      return element;
    } else {
      var increment = y > 0 ? -1 : 1;
      return element + multiply(x, y + increment);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if(y === 0) {
    return NaN;
  }

  var absX = x > 0 ? x : -x;
  var absY = y > 0 ? y : -y;

  if(absX < absY) {
    return 0;
  } else {
    var element = (x > 0 && y > 0) || (x < 0 && y < 0) ? 1 : -1;
    var increment = x > 0 ? -absY : absY;
    return element + divide(x + increment, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0) {
    return null;
  }

  var divisor = x;

  if(!(Array.isArray(y))) {
    divisor = Math.min(x, y);
    y = [x, y];  
  }
  
  if(y.every(el => el % divisor === 0)) {
    return divisor;
  } else {
    return gcd(divisor - 1, y);
  } 
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str2.length + str1.length === 0) {
    return true;
  }

  if(typeof str1 === 'string') {
    str1 = str1.split('');
    str2 = str2.split('');
  } 

  var char1 = str1.shift();
  var char2 = str2.shift();

  if(char1 !== char2) {
    return false;
  } else {
    return compareStr(str1, str2);
  }
  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if(str.length === 0) {
    return [];
  }

  var char = str[0];
  var substring = str.substr(1);
  return [char].concat(createArray(substring));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if(array.length <= 1) {
    return array;
  } else {
    var firstElement = array.shift();
    var lastElement = array.pop();
    return [lastElement].concat(reverseArr(array)).concat([firstElement]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if(length > 0) {
    return [value].concat(buildList(value, length - 1));
  } else {
    return [];
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if(n <= 0) {
    return [];
  }

  var string = '';

  if(n % 3 === 0) {
    string += 'Fizz';
  }

  if(n % 5 === 0) {
    string += 'Buzz';
  } else if(n % 3 !== 0) {
    string = String(n);
  }

  return fizzBuzz(n - 1).concat([string]); 
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0) {
    return 0;
  } else {
    var element = array.shift();
    var addition = element === value ? 1 : 0;
    return addition + countOccurrence(array, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var array = array.slice();
  if(array.length === 0) {
    return [];
  } else {
    var element = callback(array.shift());
    return [element].concat(rMap(array, callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var sum = 0;
  for(var prop in obj) {
    if(prop === key) {
      sum++;
    }

    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      sum += countKeysInObj(obj[prop], key);
    }
  }

  return sum;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var sum = 0;
  for(var prop in obj) {
    if(obj[prop] === value) {
      sum++;
    } else if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      sum += countValuesInObj(obj[prop], value);
    }
  }
  return sum;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for(var prop in obj) {
    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      obj[prop] = replaceKeysInObj(obj[prop], oldKey, newKey);
    }
    if(prop === oldKey) {
      obj[newKey] = obj[prop];
      delete obj[prop];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if(n <= 0) {
    return null;
  } else if(n === 1) {
    return [0, 1];
  }
  return (fibonacci(n - 1).concat([n])).map((el, ind, arr) => {
    if(ind >= 2 && ind === arr.length - 1) {
      return arr[ind - 1] + arr[ind - 2];
    } else {
      return el;
    }
  });
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0) {
    return null;
  } else if(n <= 1) {
    return n;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if(array.length === 0) {
    return [];
  } else {
    var element = array.shift();
    return [element.toUpperCase()].concat(capitalizeWords(array));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if(array.length === 0) {
    return [];
  } else {
    var element = array.shift();
    return [element.substr(0, 1).toUpperCase() + element.substr(1)].concat(capitalizeFirst(array));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for(var prop in obj) {
    if(typeof obj[prop] === 'number' && obj[prop] % 2 === 0) {
      sum += obj[prop];
    } else if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      sum += nestedEvenSum(obj[prop]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flattenedArray = [];
  while(array.length > 0) {
    var element = array.shift();
    if(Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray = flattenedArray.concat([element]);
    }
  }
  return flattenedArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if(obj === undefined) {
    obj = {};
  }

  if(str.length === 0) {
    return obj;
  }

  var char = str.substr(0, 1);
  str = str.substr(1);

  obj[char] = obj[char] + 1 || 1;
  return letterTally(str, obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if(list.length === 0) {
    return [];
  }

  var copyOfList = list.slice();
  var element = copyOfList.shift();

  while(element === copyOfList[0]) {
    element = copyOfList.shift();
  }

  return [element].concat(compress(copyOfList));

};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if(array.length === 0) {
    return [];
  }

  var element = array.shift();
  element.push(aug);

  return [element].concat(augmentElements(array, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(array.length === 0) {
    return [];
  }

  var copyOfArray = array.slice();
  var element = copyOfArray.shift();

  if(element === 0) {
    while(copyOfArray[0] === 0) {
      copyOfArray.shift();
    }
  }
  
  return [element].concat(minimizeZeroes(copyOfArray));

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if(array.position === undefined) {
    array.position = -1;
  }

  if(array.length === 0) {
    return [];
  }
  var copyOfArray = array.slice();
  var element = copyOfArray.shift();
  var absElement = Math.abs(element);
  copyOfArray.position = array.position + 1;

  return [Math.pow(-1, copyOfArray.position) * absElement].concat(alternateSign(copyOfArray));

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if(str === '') {
    return '';
  }

  var words = str.split(' ');
  var numbers = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine'
  };
  var word = words.shift();
  if(Object.keys(numbers).includes(word)) {
    word = numbers[word];
  }

  return word + ' '.repeat(words.length > 0 ? 1 : 0) + numToText(words.join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if(node === undefined) {
    if(tag === 'body') {
      return 1;
    }
    node = $('body').children();
  }

  var sum = 0;
  for(var i = 0; i < node.length; i++) {
    var domElement = node[i];
    if(domElement.tagName.toLowerCase() === tag) {
      sum++;
    }

    if(domElement.children.length > 0) {
      sum += tagCount(tag, domElement.children);
    }
  }
  return sum;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if(array.length === 0) {
    return undefined;
  }

  var result;
  var middleIndex = Math.floor(array.length / 2);
  if(target < array[middleIndex]) {
    result = binarySearch(array.slice(0, middleIndex), target);
  } else if(target > array[middleIndex]) {
    var addition = binarySearch(array.slice(middleIndex + 1), target);
    result = middleIndex + 1 + (isNaN(addition) || addition === null ? undefined : addition);
  } else {
    result = middleIndex;
  }

  return (isNaN(result) || result === undefined) ? null : result; 
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var merge = function(arr1, arr2) {
    var totalLength = arr1.length + arr2.length;
    var mergedArray = [];
    for(var i = 0; i < totalLength; i++) {
      if(arr1[0] < arr2[0] || arr2[0] === undefined) {
        mergedArray.push(arr1.shift());
      } else {
        mergedArray.push(arr2.shift());
      }
    }
    return mergedArray;
  };

  var halfLength = Math.floor(array.length / 2);
  var subArray1 = array.slice(0, halfLength);
  var subArray2 = array.slice(halfLength);

  if(subArray1.length > 1) {
    subArray1 = mergeSort(subArray1);
  } 
  if(subArray2.length > 1) {
    subArray2 = mergeSort(subArray2);
  } 
  
  return merge(subArray1, subArray2);
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if(Array.isArray(input)) {
    var clonedArray = [];
    for(var i = 0; i < input.length; i++) {
      clonedArray.push(clone(input[i]));
    }
    return clonedArray;
  }

  if(typeof input !== 'object') {
    return input;
  }

  var clonedObj = {};
  for(var prop in input) {
    var value = input[prop];
    if(typeof value !== 'object') {
      clonedObj[prop] = clone(value);
    } else {
      clonedObj[prop] = clone(value);
    }
  }
  return clonedObj;
};
