//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

const getCentury = (year) => {
  return year%100 === 0 ?  year/100 : Math.ceil(year/100)
}

console.log(getCentury(2022));
