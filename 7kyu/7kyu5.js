//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

let str = '6753489210'

const newStrOrder = (str) => {
  return str.split('').sort().reverse().join('')
}

console.log(newStrOrder(str));
