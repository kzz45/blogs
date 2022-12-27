# 这个和基础的打家劫舍的区别在于，首尾相连了

# 情形一：不包含首尾元素
# 情形二：包含首，不包含尾
# 情形三：不包含首，包含尾

class Solution:
    def rob(self, nums) -> int:
        if len(nums) == 1:
            return nums[0]
        first = self.rob_range(nums[1:])  # 不抢第一家
        last = self.rob_range(nums[:-1])  # 不抢最后一家
        return max(first, last)

    def rob_range(self, nums):
        dp = [0] * len(nums)
        dp[0] = nums[0]
        for i in range(1, len(nums)):
            if i == 1:
                dp[i] = max(dp[i - 1], nums[i])
            else:
                dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
        return dp[-1]
