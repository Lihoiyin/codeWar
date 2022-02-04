//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

let str = 'hello'

const repeat = (str, num) => {
  let newStr = ''
  for (let i = 0 ; i < num; i++){
    newStr += str
  }
  return newStr
}

console.log(repeat(str, 6));
