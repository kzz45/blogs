# 描述：给定两个字符串形式的非负整数 num1 和num2。

# 要求：计算它们的和，并同样以字符串形式返回。

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        res = ""
        i = len(num1) - 1
        j = len(num2) - 1
        # 进位
        carry = 0
        while i >= 0 or j >= 0:
            n1 = int(num1[i]) if i >= 0 else 0
            n2 = int(num2[j]) if j >= 0 else 0
            tmp = n1 + n2 + carry
            carry = tmp // 10
            res = str(tmp % 10) + res
            i -= 1
            j -= 1
        return "1" + res if carry else res

# 用一个数组存储按位相加后的结果，每一位对应一位数。
# 然后分别使用一个指针变量，对两个数 num1、num2 字符串进行反向遍历，将相加后的各个位置上的结果保存在数组中，这样计算完成之后就得到了一个按位反向的结果。
# 最后返回结果的时候将数组反向转为字符串即可。

    def addStrings2(self, num1: str, num2: str) -> str:
        carry = 0
        res = []
        n1 = len(num1) - 1
        n2 = len(num2) - 1
        while carry > 0 or n1 >= 0 or n2 >= 0:
            num1_d = int(num1[n1]) if n1 >= 0 else 0
            num2_d = int(num2[n2]) if n2 >= 0 else 0
            n1 -= 1
            n2 -= 1
            num = num1_d + num2_d + carry
            res.append(str(num % 10))
            carry = num // 10

        return "".join(res[::-1])
