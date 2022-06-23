# 数组最大值

def process(arr, l, r):
    if l == r:
        return arr[l]

    mid = l + ((r-l) >> 1)
    left = process(arr, 0, mid)
    right = process(arr, mid +1, r)
    return max(left, right)

def get_max(arr):
    return process(arr, 0 ,len(arr)-1)


result = get_max([3,4,1,10,9,300,100,99,33])
print(result)