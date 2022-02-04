//https://www.codewars.com/kata/5583090cbe83f4fd8c000051

const reversedArray = (num) => {
  let numStr = String(num)
  return numStr.split('').sort().reverse()
}

console.log(reversedArray(43725678));
