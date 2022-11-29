class Solution:
    def searchRange(self, nums, target):
        def binarySearch(nums, target):
            left = 0
            right = len(nums) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] >= target:
                    right = mid - 1
                else:
                    left = mid + 1
            return left
        left_idx = binarySearch(nums, target)
        right_idx = binarySearch(nums, target + 1) - 1
        if left_idx == len(nums) or nums[left_idx] != target:
            return [-1, -1]
        return [left_idx, right_idx]
