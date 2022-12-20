class Solution:
    def fib(self, n: int) -> int:
        if n == 1 or n == 2:
            return 1
        return self.fib(n - 1) + self.fib(n - 2)

    def fib2(self, n):
        arr = [0] * (n + 1)
        return self.hepler(arr, n)

    def hepler(self, arr, n):
        if n == 0 or n == 1:
            return n
        if arr[n] != 0:
            return arr[n]
        arr[n] = self.hepler(arr, n - 1) + self.hepler(arr, n - 2)
        return arr[n]

    def fib3(self, n: int) -> int:
        if n == 0:
            return 0
        dp = [0] * (n + 1)
        dp[0] = 0
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
