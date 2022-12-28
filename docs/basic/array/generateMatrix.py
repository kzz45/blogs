class Solution:
    def generateMatrix(self, n: int):
        res = [[0] * n for _ in range(n)]
        left = 0
        right = n - 1
        top = 0
        bottom = n - 1
        num = 1
        while left <= right and top <= bottom:
            for col in range(left, right + 1):
                res[top][col] = num
                num += 1
            for row in range(top + 1, bottom + 1):
                res[row][right] = num
                num += 1
            if left < right and top < bottom:
                for col in range(right - 1, left, -1):
                    res[bottom][col] = num
                    num += 1
                for row in range(bottom, top, -1):
                    res[row][left] = num
                    num += 1
            left += 1
            right -= 1
            top += 1
            bottom -= 1
        return res
