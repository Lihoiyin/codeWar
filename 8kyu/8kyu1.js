//https://www.codewars.com/kata/5715eaedb436cf5606000381

let nums = [1, 2, 3, 4, -1, -2]

const sumOfPositive = (nums) => {
  let sum = 0
  nums.forEach(num => {
    if(num > 0){
      sum += num
    }
  });
  return sum
}

console.log(sumOfPositive(nums));
