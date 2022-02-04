//https://www.codewars.com/kata/5390bac347d09b7da40006f6

const speech = "How can mirrors be real if our eyes aren't real"

const speechConverter = (speech) => {
  let splitStr = speech.split(' ')
  let words = []
  for (let i = 0; i < splitStr.length; i++){
    chars = splitStr[i].split('')
    chars[0] = chars[0].toUpperCase()
    let word = chars.join('')
    words.push(word)
  }
  return words.join(' ')
}
console.log(speechConverter(speech));
