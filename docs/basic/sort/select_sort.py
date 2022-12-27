# 1. 将索引位置 0 定义为最小的值 min_idx
# 2. 遍历数组，找到数组中最小的值
# 3. 在遍历的时候，如果找到任何小于 min_idx 的元素，则交换两个值
# 4. 移动 min_idx 指针
# 5. 重复上述动作直到数组排序完成

test_list = [64, 25, 12, 22, 11]
print(test_list)


def select_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[min_idx] > arr[j]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


select_sort(arr=test_list)

print(test_list)
