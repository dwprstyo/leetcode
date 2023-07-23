var searchInsert = function(nums, target) {
    let bucket = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            if (nums[i] == target) {
                return i
            }
            bucket.push(nums[i]);
        }
    }

    return bucket.length
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));