def partition(arr, low, high):
    # 总是选择最右的
    pi = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pi:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)


arr = [0, 5, 1, 8, 7, 9]
quick_sort(arr, 0, len(arr) - 1)
print(arr)
