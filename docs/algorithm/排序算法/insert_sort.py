def insert_sort(arr):
    for i in range(len(arr)):
        j = i -1
        cur = arr[i]
        while j >=0 and arr[j]>cur:
            arr[j+1] = arr[j]
            j-=1
        arr[j+1] = cur
    return arr

result = insert_sort([2,5,1,7,8,3,4,6])
print(result)