var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    const count = new Map();
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, count.get(char));

        const windowSize = right - left + 1;
        const changesNeeded = windowSize - maxFreq;

        if (changesNeeded > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
