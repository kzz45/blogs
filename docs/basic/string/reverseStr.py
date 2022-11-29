class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        res = list(s)
        for i in range(0, len(res), k * 2):
            res[i:i + k] = reversed(res[i:i + k])
        return "".join(res)

    def reverseStr(self, s: str, k: int) -> str:
        def reverse_str(alist):
            left = 0
            right = len(alist) - 1
            while left < right:
                alist[left], alist[right] = alist[right], alist[left]
                left += 1
                right -= 1
            return alist

        res = list(s)
        for i in range(0, len(res), k * 2):
            res[i: i + k] = reverse_str(res[i: i + k])
        return "".join(res)
