class Solution:
    # 移除多余空格
    def trim(self, s):
        left = 0
        right = len(s) - 1
        while left <= right and s[left] == " ":
            left += 1
        while left <= right and s[right] == " ":
            right -= 1
        res = []
        while left <= right:
            if s[left] != " ":
                res.append(s[left])
            elif res[-1] != " ":
                res.append(s[left])
            left += 1
        return res

    # 翻转字符串数组
    def reverse(self, s, left, right):
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
        return None

    # 翻转每个单词
    def reverse_each_word(self, l):
        start = 0
        end = 0
        n = len(l)
        while start < n:
            while end < n and l[end] != " ":
                end += 1
            self.reverse(l, start, end - 1)
            start = end + 1
            end += 1
        return None

    def reverseWords(self, s: str) -> str:
        l = self.trim(s)
        self.reverse(l, 0, len(l) - 1)
        self.reverse_each_word(l)
        return "".join(l)
