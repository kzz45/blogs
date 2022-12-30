# 这道题主要用到思路是：滑动窗口

# 什么是滑动窗口？

# 其实就是一个队列,比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，当再进入 a，队列变成了 abca，这时候不满足要求。所以，我们要移动这个队列！

# 如何移动？

# 我们只要把队列的左边的元素移出就行了，直到满足题目要求！

# 一直维持这样的队列，找出队列出现最长的长度时候，求出解！

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        window = set()
        cur_len = 0
        max_len = 0
        for i in range(len(s)):
            cur_len += 1
            while s[i] in window:
                window.remove(s[left])
                left += 1
                cur_len -= 1
            if cur_len > max_len:
                max_len = cur_len
            window.add(s[i])
        return max_len

    def lengthOfLongestSubstring2(self, s: str) -> int:
        left = 0
        right = 0
        res = 0
        window = dict()
        while right < len(s):
            if s[right] not in window:
                window[s[right]] = 1
            else:
                window[s[right]] += 1

            while window[s[right]] > 1:
                window[s[left]] -= 1
                left += 1

            res = max(res, right - left + 1)

            right += 1
        return res

    def lengthOfLongestSubstring3(self, s):
        left, right = 0, 0
        charset = set()
        res = 0
        while left < len(s) and right < len(s):
            if s[right] in charset:
                if s[left] in charset:
                    charset.remove(s[left])
                left += 1
            else:
                charset.add(s[right])
                right += 1
                res = max(res, len(charset))
        return res
