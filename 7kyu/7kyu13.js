//https://www.codewars.com/kata/558fc85d8fd1938afb000014

const arrayNum = [8, 2, 9, 4, 5]

const sumLow2 = (arrayNum) => {
  return arrayNum.sort()[0] + arrayNum.sort()[1]
}

console.log(sumLow2(arrayNum))
