# 给定一个整数数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a、b、c、d，使得 a + b + c + d = target

# 要求找出所有满足条件且不重复的四元组。

class Solution:
    def fourSum(self, nums, target: int):
        n = len(nums)
        res = []
        nums.sort()
        for i in range(n):
            # 对nums[i]去重
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for k in range(i + 1, n):
                if k > i + 1 and nums[k] == nums[k - 1]:
                    continue
                left = k + 1
                right = n - 1
                while left < right:
                    if nums[i] + nums[k] + nums[left] + nums[right] > target:
                        right -= 1
                    elif nums[i] + nums[k] + nums[left] + nums[right] < target:
                        left += 1
                    else:
                        res.append([nums[i], nums[k], nums[left], nums[right]])
                        while left < right and nums[left] == nums[left + 1]:
                            left += 1
                        while left < right and nums[right] == nums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
        return res
