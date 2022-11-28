class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        f1 = 1
        f2 = 2
        if n == 1:
            return f1
        if n == 2:
            return f2
        for _ in range(3, n + 1):
            fn = f2 + f1
            f1 = f2
            f2 = fn
        return fn
