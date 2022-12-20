class Solution(object):
    def climbStairs(self, n):
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

    def climbStairs(self, n):
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
