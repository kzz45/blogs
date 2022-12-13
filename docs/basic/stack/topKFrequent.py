class Solution:
    def topKFrequent(self, nums, k: int):
        maps = {}
        # 一次循环跑出元素出现的次数
        # nums[i] 对应出现的次数
        for i in range(len(nums)):
            maps[nums[i]] = maps.get(nums[i], 0) + 1

        # 对频次排序
        # 小顶堆
        import heapq
        small_que = []
        for key, val in maps.items():
            heapq.heappush(small_que, (val, key))
            if len(small_que) > k:
                heapq.heappop(small_que)

        res = [0] * k
        for i in range(k - 1, -1, -1):
            res[i] = heapq.heappop(small_que)[1]
        return res
