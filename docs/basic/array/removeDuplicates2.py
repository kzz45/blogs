class Solution:
    def removeDuplicates(self, nums):
        n = len(nums)
        if n < 2:
            return n
        slow = 2
        fast = 2
        while fast < n:
            if nums[fast] != nums[slow - 2]:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow
