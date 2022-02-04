//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

let str = 'fdjh fkds jhk fsh'

const noSpace = (str) => {
  // / /g means all the spaces, if you do not use code runner, you can just use .replaceAll(' ', '')
  let newStr = str.replace(/ /g, '')
  return newStr
}

console.log(noSpace(str))
