# 描述：给定一个整数数组 nums。

# 要求：判断 nums 中是否存在三个元素 a、b、c，满足 a + b + c == 0。要求找出所有满足要求的不重复的三元组。


class Solution:
    def threeSum(self, nums):
        n = len(nums)
        res = []
        nums.sort()
        for i in range(n):
            left = i + 1
            right = len(nums) - 1
            # 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
            if nums[i] > 0:
                break
            # 去重
            if i >= 1 and nums[i] == nums[i - 1]:
                continue
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total > 0:
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    res.append([nums[i], nums[left], nums[right]])
                    # 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
                    while left != right and nums[left] == nums[left + 1]:
                        left += 1
                    while left != right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
        return res
