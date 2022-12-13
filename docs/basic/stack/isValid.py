class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False

        stack = []
        for item in s:
            if item == "(":
                stack.append(")")
            elif item == "{":
                stack.append("}")
            elif item == "[":
                stack.append("]")
            elif not stack or stack[-1] != item:
                return False
            else:
                stack.pop()
        return not stack
