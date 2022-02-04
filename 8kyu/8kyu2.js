//https://www.codewars.com/kata/55685cd7ad70877c23000102

let num1 = 1
let num2 = -2
let num3 = 0

const toNegative = (num) => {
  if (num === 0){
    return num
  }
  return Math.abs(num)* -1
}


console.log(toNegative(num1));
console.log(toNegative(num2));
console.log(toNegative(num3));
