class Solution:
    def commonChars(self, words):
        min_count = [float("inf")] * 26
        for word in words:
            temp = [0] * 26
            for i in word:
                temp[ord(i) - ord("a")] += 1
            for i in range(26):
                min_count[i] = min(min_count[i], temp[i])

        res = []
        for i in range(26):
            res.extend([chr(i + ord("a"))] * min_count[i])
        return res
