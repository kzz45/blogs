def swap(arr, l, r):
    arr[l], arr[r] = arr[r], arr[l]


def heap(arr, index):
    while True:
        if arr[index] > arr[(index - 1) // 2]:
            swap(arr, index, (index - 1) // 2)
            index = (index - 1) // 2
        else:
            break


arr = [2, 3, 6, 8, 1, 9]
print(arr)
heap(arr, 2)
print(arr)
