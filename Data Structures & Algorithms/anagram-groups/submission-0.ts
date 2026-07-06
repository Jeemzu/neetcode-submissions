class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMap: Record<string, string[]> = {};

        strs.forEach((s) => {
            const sortedS = s.split('').sort().join('');
            if(!strMap[sortedS]) {
                strMap[sortedS] = [];
            }
            strMap[sortedS].push(s);
        });

        return Object.values(strMap);
    }
}
