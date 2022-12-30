# 描述：给定一个列表 temperatures，temperatures[i] 表示第 i 天的气温。

# 要求：输出一个列表，列表上每个位置代表「如果要观测到更高的气温，至少需要等待的天数」。如果之后的气温不再升高，则用 0 来代替。

# 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer
# 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

class Solution:
    def dailyTemperatures(self, temperatures):
        n = len(temperatures)
        stack = []
        res = [0 for _ in range(n)]
        for i in range(n):
            temperature = temperatures[i]
            while stack and temperature > temperatures[stack[-1]]:
                index = stack.pop()
                res[index] = i - index
            stack.append(i)

        return res
