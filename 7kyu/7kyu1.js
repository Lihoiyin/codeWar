//https://www.codewars.com/kata/54ff3102c1bad923760001f3

let str = "This website is for losers LOL!"

const vowelsCounter = (str) => {
  let counter = 0
  for (let i = 0; i < str.length; i++){
    switch (str[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        counter++
        break;
      default:
        break;
    }
  }
  return counter
}

console.log(vowelsCounter(str))
