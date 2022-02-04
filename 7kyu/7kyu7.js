//https://www.codewars.com/kata/56747fd5cb988479af000028

let str1 = 'test'
let str2 = 'testing'
let str3 = 'middle'
let str4 = 'A'

const getMiddle = (str) => {
  const strLength = str.length
  if (strLength === 1){
    return str[0]
  }else if (strLength % 2 === 0){
    return str[strLength/2 - 1] + str[strLength/2]
  } else {
    return str[Math.round(strLength/2) - 1]
  }
}

console.log(getMiddle(str1))
console.log(getMiddle(str2))
console.log(getMiddle(str3))
console.log(getMiddle(str4))
