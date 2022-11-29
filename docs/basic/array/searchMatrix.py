import bisect


class Solution:
    def searchMatrix(self, matrix, target: int) -> bool:
        def search(nums, target):
            left = 0
            right = len(nums) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    return mid
                elif nums[mid] > target:
                    right -= 1
                else:
                    left += 1
            return -1

        for row in matrix:
            idx = search(row, target)
            if idx >= 0:
                return True
        return False
