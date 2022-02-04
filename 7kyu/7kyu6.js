//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

let str1 = "abcd"
let str2 = "RqaEzty"
let str3 = "cwAt"

const accum = (str) => {
  let data = []
  let chars
  let splitStr = str.split('')
  for (let i = 0; i < str.length; i++){
    chars = splitStr[i]
    data.push(splitStr[i].toUpperCase())
    for (let j = 0; j < i + 1; j++){
      data[i] = data[i] + chars
    }
    data[i] = data[i]
  }
  return data.join('-')
}

console.log(accum(str1))
console.log(accum(str2))
console.log(accum(str3))
