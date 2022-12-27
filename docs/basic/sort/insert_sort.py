# 1. 循环遍历数组 arr
# 2. 比较当前元素和其前身
# 3. 如果当前元素小于其前身，则将其与之前的元素进行比较。将较大的元素向后移动一个位置


def insert_sort(arr):
    for i in range(len(arr)):
        cur = arr[i]  # 指定当前元素
        j = i - 1
        # 当前元素和其前身比较
        while j >= 0 and arr[j] > cur:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = cur
    return arr


result = insert_sort([2, 5, 1, 7, 8, 3, 4, 6])
print(result)
