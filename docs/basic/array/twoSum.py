class Solution:
    def twoSum(self, nums, target):
        temp = dict()
        for i, num in enumerate(nums):
            if target - num in temp:
                return [temp[target - num], i]
            temp[nums[i]] = i
        return []
