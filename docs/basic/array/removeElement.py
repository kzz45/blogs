class Solution:
    def removeElement(self, nums, val: int) -> int:
        slow = 0
        fast = 0
        n = len(nums)
        while fast < n:
            if nums[fast] != val:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow
