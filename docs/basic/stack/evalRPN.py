# 逆波兰表达式：是一种后缀表达式，所谓后缀就是指运算符写在后面。

# 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。

# 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。

# 逆波兰表达式主要有以下两个优点：

# 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。

# 适合用栈操作运算：遇到数字则入栈；遇到运算符则取出栈顶两个数字进行计算，并将结果压入栈中。


class Solution:
    def evalRPN(self, tokens) -> int:
        stack = []
        for item in tokens:
            if item == "+":
                stack.append(stack.pop() + stack.pop())
            elif item == "-":
                stack.append(-stack.pop() + stack.pop())
            elif item == "*":
                stack.append(stack.pop() * stack.pop())
            elif item == "/":
                stack.append(int(1 / stack.pop() * stack.pop()))
            else:
                stack.append(int(item))
        return stack.pop()
