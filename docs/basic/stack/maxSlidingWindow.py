class Solution:
    def maxSlidingWindow(self, nums, k: int):
        queue = MyQueue()
        res = []
        for i in range(k):  # 先将前k的元素放进队列
            queue.push(nums[i])
        res.append(queue.front())  # 记录前k的元素的最大值

        for i in range(k, len(nums)):
            queue.pop(nums[i - k])  # 滑动窗口移除最前面元素
            queue.push(nums[i])  # 滑动窗口前加入最后面的元素
            res.append(queue.front())  # 记录对应的最大值
        return res


class MyQueue:
    def __init__(self):
        from collections import deque
        self.queue = deque()

    # 每次弹出的时候，比较当前要弹出的数值是否等于队列出口元素的数值，如果相等则弹出
    # 同时pop之前判断队列当前是否为空
    def pop(self, val):
        if self.queue and val == self.queue[0]:
            self.queue.popleft()

    # 如果push的数值大于入口元素的数值，那么就将队列后端的数值弹出，直到push的数值小于等于队列入口元素的数值为止
    # 这样就保持了队列里的数值是单调从大到小的了
    def push(self, val):
        while self.queue and val > self.queue[-1]:
            self.queue.pop()
        self.queue.append(val)

    # 当前队列里的最大值
    def front(self):
        return self.queue[0]
