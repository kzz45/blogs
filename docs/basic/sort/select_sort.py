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
