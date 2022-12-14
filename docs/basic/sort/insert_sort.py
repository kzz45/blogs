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
