//https://www.codewars.com/kata/52fba66badcd10859f00097e

let str = "This website is for losers LOL!"

const vowelsDelete = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    switch (str[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        break;
      default:
        newStr += str[i]
        break;
    }
  }
  return newStr
}

console.log(vowelsDelete(str))
