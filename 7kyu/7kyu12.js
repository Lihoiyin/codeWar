//https://www.codewars.com/kata/5412509bd436bd33920011bc

const DNA1 = 'sdashfkjahfkjadhf'

const maskify = (DNA) => {
  return DNA.slice(0, -4) + '####'
}

console.log(maskify(DNA1))
