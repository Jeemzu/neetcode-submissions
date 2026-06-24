class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        let sLetterCounts: Map<string, number> = new Map;
        let tLetterCounts: Map<string, number> = new Map;

        for(let i = 0; i < s.length; i++) {
            const sCharacter = s.slice(i, i + 1);
            if(sLetterCounts.has(sCharacter)) sLetterCounts.set(sCharacter, sLetterCounts.get(sCharacter)! + 1);
            else sLetterCounts.set(sCharacter, 1);
        }

        for(let i = 0; i < t.length; i++) {
            const tCharacter = t.slice(i, i + 1);
            if(tLetterCounts.has(tCharacter)) tLetterCounts.set(tCharacter, tLetterCounts.get(tCharacter)! + 1);
            else tLetterCounts.set(tCharacter, 1);
        }

        if(sLetterCounts.size != tLetterCounts.size) return false;

        for (const char of sLetterCounts.keys()) {
            if(!tLetterCounts.has(char)) return false;
            if(tLetterCounts.get(char) !== sLetterCounts.get(char)) return false;
        }

        return true;
    }
}
