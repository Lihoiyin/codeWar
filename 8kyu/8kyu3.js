//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

let str = 'safkashkasfbbv'

const removeHeadTail = (str) => {

  return str.slice(1,str.length -1)
}

console.log(removeHeadTail(str));
