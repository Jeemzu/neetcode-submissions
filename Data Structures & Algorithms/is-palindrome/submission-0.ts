class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const processed: string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const rev: string = processed.split("").reverse().join("");

        console.log(rev);
        console.log(processed);
        return rev === processed;
    }
}
