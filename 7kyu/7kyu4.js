//https://www.codewars.com/kata/554b4ac871d6813a03000035

let nums = [1, 2, 3, 4, 5]

const highAndLow = (nums) => {
  let low = nums[0]
  let high = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > high){
      high = nums[i]
    }
    if (nums[i] < low){
      low = num[i]
    }
  }
  return [low, high]
}

console.log(highAndLow(nums));
