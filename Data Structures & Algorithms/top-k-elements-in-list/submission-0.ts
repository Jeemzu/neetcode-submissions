class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numCounts: Record<number, number> = {};
        
        nums.forEach((n) => {
            if(!numCounts[n]) numCounts[n] = 0;
            numCounts[n]++;
        });

        const arr = Object.entries(numCounts).map(([num, freq]) => [freq, parseInt(num)]);
        arr.sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((pair) => pair[1]);
    }
}
