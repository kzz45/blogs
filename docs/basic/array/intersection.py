# nums1 = [4, 9, 5]
# nums2 = [9, 4, 9, 8, 4]

# print(list(set(nums1) & set(nums2)))

class Solution:
    def intersection(self, nums1, nums2):
        return list(set(nums1) & set(nums2))

    def intersection2(self, nums1, nums2):
        ans = []
        temp_dict = {}
        for i in nums1:
            temp_dict[i] = 1

        for i in nums2:
            if i in temp_dict.keys() and temp_dict[i] == 1:
                ans.append(i)
                temp_dict[i] = 0

        return ans
