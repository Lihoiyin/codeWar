//https://www.codewars.com/kata/5656b6906de340bd1b0000ac

const DNA1 = "xyaabbbccccdefww"
const DNA2 = "xxxxyyyyabklmopq"

const longest = (a, b) => {
  //Set object will remove duplicate elements in an array
  //sort() method sorts the elements of an array in place
  //join() method creates and returns a new DNA by concatenating all of the elements in an array
  return [...new Set(DNA1)].concat([...new Set(DNA2)]).sort().join('')
}

console.log(longest(DNA1, DNA2))
