class Solution {
    private valSet: Set<number> = new Set<number>;
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let beforeLength: number;
        for(let i = 0; i < nums.length; i++){
            beforeLength = this.valSet.size;
            this.valSet.add(nums[i]);

            if(beforeLength === this.valSet.size) return true;
        }

        return false;
    }
}
