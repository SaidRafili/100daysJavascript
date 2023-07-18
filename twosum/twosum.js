var nums = [1,2,3,4,5,6,7,8,9,10]
var target = 7

var twoSum = function (nums, target) {
for (let i = 1; i < nums.length; i++) {
for (let k = 0; k < i; k++) {
  if (nums[i] + nums[k] === target) {
    return [k, i];
  }
}
}
};

