//https://www.codewars.com/kata/546e2562b03326a88e000020

let str = '1234'

const squareBind = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    newStr += str[i]**2
  }
  return newStr
}

console.log(squareBind(str))
