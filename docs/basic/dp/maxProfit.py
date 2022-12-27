class Solution:
    # 暴力循环 两次遍历
    def maxProfit(self, prices) -> int:
        res = 0
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                res = max(res, prices[j] - prices[i])
        return res

    # 一次遍历，记录最低点
    def maxProfit2(self, prices) -> int:
        res = 0
        low = float("inf")
        for i in range(len(prices)):
            low = min(low, prices[i])  # 取最左最小价格
            res = max(res, prices[i] - low)  # 直接取最大区间利润
        return res
