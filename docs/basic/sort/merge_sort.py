def merge(left, right):
    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    while left:
        result.append(left.pop(0))
    while right:
        result.append(right.pop(0))
    return result


def merge_sort(arr):
    if len(arr) < 2:
        return arr
    mid = 0 + ((len(arr) - 0) >> 1)
    left = arr[:mid]
    right = arr[mid:]
    return merge(merge_sort(left), merge_sort(right))


xxx = merge_sort([9, 10, 2, 8, 7, 100, 22, 99, 15])
print(xxx)
