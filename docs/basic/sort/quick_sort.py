def swap(arr, i, j):
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
    # return arr


# xxx = swap([2, 4, 6, 8, 1, 9], 0, 2)
# print(xxx)
