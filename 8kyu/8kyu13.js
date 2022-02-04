//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

const getMilliseconds = (h, m, s) => {
  let milliseconds = 0
  if (h >= 0 && h <= 23){
    milliseconds += h*3600*1000
  }
  if (m >= 0 && m <=59){
    milliseconds += m*60*1000
  }
  if (s >= 0 && s <=59){
  milliseconds += s*1000
  }
  return milliseconds
}

console.log(getMilliseconds(4,20,1));
