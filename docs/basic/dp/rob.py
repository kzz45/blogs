# 当前偷不偷，取决于前一个房屋和前两个房屋是否被偷了

class Solution:
    def rob(self, nums) -> int:
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            return nums[0]
        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, len(nums)):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
        return dp[-1]

    def rob2(self, nums):
        return self.dp(self, nums, 0)

    def dp(self, nums, start):
        if start >= len(nums):
            return 0
        # self.dp(nums, start + 1) 不抢，去下一家
        # self.dp(nums, start + 2) + nums[start] 抢，去下下家
        res = max(self.dp(nums, start + 1), self.dp(nums, start + 2) + nums[start])
        return res
