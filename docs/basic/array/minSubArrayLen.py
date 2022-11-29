class Solution:
    def minSubArrayLen(self, target: int, nums) -> int:
        res = float("inf")
        start = 0  # 滑动窗口起始位置
        total = 0  # 滑动窗口数值之和
        for end in range(len(nums)):
            total += nums[end]
            while total >= target:
                res = min(res, end - start + 1)
                total -= nums[start]
                start += 1
        return 0 if res == float("inf") else res

    def minSubArrayLen2(self, target: int, nums) -> int:
        start = 0
        end = 0
        total = 0
        n = len(nums)
        ans = n + 1
        while end < n:
            total += nums[end]
            while total >= target:
                ans = min(ans, end - start + 1)
                total -= nums[start]
                start += 1
            end += 1
        return 0 if ans == n + 1 else ans
