# 使用两个指针 left，right。left 指向字符数组开始位置，right 指向字符数组结束位置。
# 交换 s[left] 和 s[right]，将 left 右移、right 左移。
# 如果遇到 left == right，跳出循环

# 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题

class Solution:
    def reverseString(self, s):
        left = 0
        right = len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

    # 使用额外空间
    def reverseString2(self, s):
        res = []
        for i in range(len(s) - 1, -1, -1):
            res.append(s[i])
        return res
