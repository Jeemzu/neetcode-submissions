
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];

            if(nums.includes(complement) && i != nums.indexOf(complement)) {
                return [i, nums.indexOf(complement)];
            }
        }

        return [];
    }
}
