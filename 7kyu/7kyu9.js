//https://www.codewars.com/kata/55908aad6620c066bc00002a

let str1 = 'dshjadkajhoooooxxxxx'
let str2 = 'fdsjgfkajgfkoooxx'
let str3 = 'fdjgfkafjg'

const xoChecker = (str) => {
  let xCounter = 0
  let yCounter = 0
  for (let i = 0; i < str.length; i++){
    xCounter = (str[i] === 'o') ? xCounter+1 : xCounter
    yCounter = (str[i] === 'x') ? yCounter+1 : yCounter
  }
  if (xCounter === yCounter){
    return true
  }
  return false
}

console.log(xoChecker(str1))
console.log(xoChecker(str2))
console.log(xoChecker(str3))
