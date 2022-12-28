# 快慢指针，快的先走，比较快的位置和慢的位置的值，如果不相等，快的位置赋值给 slow，然后 slow 往前走

# 当快的走完数组之后，nums[:slow] 就是整个数组去重之后的结果了

class Solution:
    def removeDuplicates(self, nums):
        if not nums:
            return 0
        slow = 1
        fast = 1
        n = len(nums)
        while fast < n:
            if nums[fast] != nums[fast - 1]:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow
