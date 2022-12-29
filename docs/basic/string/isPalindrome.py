# 描述：给定一个字符串 s。

# 要求：判断是否为回文串（只考虑字符串中的字母和数字字符，并且忽略字母的大小写）。

class Solution:
    # 双指针
    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        while left < right:
            if not s[left].isalnum():
                left += 1
                continue
            if not s[right].isalnum():
                right -= 1
                continue

            if s[left].lower() == s[right].lower():
                left += 1
                right -= 1
            else:
                return False
        return True

    def isPalindrome2(self, s: str) -> bool:
        s1 = "".join(ch.lower() for ch in s if ch.isalnum())
        return s1 == s1[::-1]
