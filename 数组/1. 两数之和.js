// https://leetcode.cn/problems/two-sum/
// 数组中同一个元素在答案里不能重复出现
// -> 使用哈希表去重
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 1. 想要寻找两数之和为 target
  // 则遍历数组的每一项寻找该项所匹配的值
  // 是否在哈希表缓存 cache 中出现
  // 2. 新建 cache 以每项的值为 key 索引为 value
  const cache = {}
  // 3. 遍历数组
  // for in 会超时
  for(let i = 0; i < nums.length; i++) {
    // 4. 缓存每一项但是相同值的项会覆盖
    // 导致想要判断的项和预期不一致
    // 所以先判断再缓存
    // 5. 如果匹配的值 match 出现在缓存中则
    // 返回当前项和 match 的下标
    let match = target - nums[i]
    if(match in cache) {
      return [cache[match], i]
    }
    // 最后再缓存避免提前覆盖
    cache[nums[i]] = i
  }
  // 6. 若不存在答案进行边界处理
};
