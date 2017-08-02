"use strict";

// 非正则
function isPrime(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return false;
  }

  if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }

  // 依次判断是否能被奇数整除，最大循环数为数值的开方
  let squareRoot = Math.sqrt(num);
  for (var i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrime2(num){

}
