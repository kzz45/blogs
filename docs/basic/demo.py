arr = [2, 3, 1, 1, 2, 3, 5, 7, 7]

n = len(arr)
tmp = arr[0]
for i in range(1, n):
    tmp = tmp ^ arr[i]
print(tmp)
