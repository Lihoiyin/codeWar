//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

let nums = [34, -345, -1, 100]

const getSmallest = (nums) => {
  let smallest = nums[0]
  for (let i = 0; i < nums.length; i++){
    if (nums[i] < smallest){
      smallest = nums[i]
    }
  }
  return smallest
}

console.log(getSmallest(nums));
