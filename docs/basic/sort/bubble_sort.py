# 1. 通过两个变量，i 和 j，跑两个嵌套循环遍历数组
# 2. if arr[i] > arr[j] 交换相邻元素


def bubble_sort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr) - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


result = bubble_sort([3, 5, 1, 6, 9, 2, 4, 7])
print(result)
