s = "rat"
t = "car"


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        temp = [0] * 26
        for i in s:
            temp[ord(i) - ord("a")] += 1
        for i in t:
            temp[ord(i) - ord("a")] -= 1

        for i in range(26):
            if temp[i] != 0:
                return False
        return True
