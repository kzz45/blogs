# 「快乐数」 定义为：
# 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
# 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
# 如果这个过程 结果为 1，那么这个数就是快乐数。


class Solution:
    def isHappy(self, n: int) -> bool:
        def cal(num):
            res = 0
            while num:
                res += (num % 10)**2
                num = num // 10
            return res

        record = set()
        while True:
            n = cal(n)
            if n == 1:
                return True
            # 如果中间结果重复出现，说明陷入死循环了，该数不是快乐数
            if n in record:
                return False
            else:
                record.add(n)
