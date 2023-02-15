var twoSum = function(nums, target) {
  const cache = {}
  for(let i = 0; i < nums.length; i++) {
    let match = target - nums[i]
    if(match in cache) {
      return [i, cache[match]]
    }
    cache[nums[i]] = i
  }
};