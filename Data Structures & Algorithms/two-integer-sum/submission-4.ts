
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Record<number, number> = []

        for (let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(Object.values(hashMap).includes(complement)) return [nums.indexOf(complement), i];
            hashMap[i] = nums[i];
        }

        return [];
    }
}
