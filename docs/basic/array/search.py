class Solution:
    def search(self, nums, target):
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (right + left) // 2
            val = nums[mid]
            if val == target:
                return mid
            elif val > target:
                right = mid - 1
            else:
                left = mid + 1
        return -1
