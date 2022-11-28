class Solution:
    def sortedSquares(self, nums):
        n = len(nums)
        left = 0
        right = n - 1
        pos = n - 1
        res = [0] * n
        while left <= right:
            if nums[left] * nums[left] > nums[right] * nums[right]:
                res[pos] = nums[left] * nums[left]
                left += 1
            else:
                res[pos] = nums[right] * nums[right]
                right -= 1
            pos -= 1
        return res
