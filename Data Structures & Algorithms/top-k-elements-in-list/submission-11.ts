class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>([]);
        
        for(const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        const buckets: number[][] = [];

        for (let i = 0; i <= nums.length; i++) {
            buckets.push([]);
        }

        for (const [num, count] of counts) {
            buckets[count].push(num);
        }

        let result: number[] = [];

        for(let count = buckets.length - 1; count >= 0; count--) {
            for(const num of buckets[count]) {
                if(result.length < k) {
                    result.push(num);
                    continue;
                }
                return result;
            }
        }
        return result;
    }
}
