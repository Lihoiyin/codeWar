//https://www.codewars.com/kata/54ba84be607a92aa900000f1
let str1 = "Dermatoglyphics"
let str2 = "aba"
let str3 = "moOse"

const isConsecutive = (str) => {
  let data = []
  let chars = str.toLowerCase()
  for (let i=0; i < str.length; i++){
    if (data.includes(chars[i])){
      return false //every time the Return run in a function, the function stops
  }
    data.push(chars[i])
    }
  return true
}

console.log(isConsecutive(str1))
console.log(isConsecutive(str2))
console.log(isConsecutive(str3))
