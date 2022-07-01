# 二进制
# print(bin(100))
# 八进制
# print(oct(100))
# 十六进制
# print(hex(100))


def xprint(num):
    for i in range(31, -1, -1):
        # print(i, end=" ")
        print(((num & (1 << i)) // num), end=" ")
    print()


xprint(100)

# x 进制


def xbin(num, x):
    l = []
    if num < 0:
        # return xbin(abs(num))
        return " " + abs(num)
    while True:
        num, xxx = divmod(num, x)
        l.append(str(xxx))
        if num == 0:
            return " ".join(l[::-1])


# print(xbin(100, 2))

# a = 1
# xprint(a)
# 00000000000000000000000000000001
# b = 0
# xprint(b)
# 00000000000000000000000000000000

# print(a & b)  # 都是1才是1
# print(a | b)  # 都是0才是0
# print(a ^ b)  # 相同是0否则是1
