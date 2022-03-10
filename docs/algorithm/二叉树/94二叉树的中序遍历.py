class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 迭代方式

class Solution:
    # 前序
    def preorderTraversal(self, root: TreeNode):
        result = []
        if not root:
            return result
        stack = [root]
        while stack:
            node = stack.pop()
            result.append(node.val)
            # 右先入后出
            if node.right:
                stack.append(node.right)
            # 左后入先出
            if node.left:
                stack.append(node.left)
        return result
    # 中序
    def inorderTraversal(self, root: TreeNode):
        result = []
        if not root:
            return result
        stack = []
        cur = root
        while cur or stack:
            if cur:
                stack.append(cur)
                cur = cur.left
            else:
                cur = stack.pop()
                result.append(cur.val)
                cur = cur.right
        return result
    # 后序
    def postorderTraversal(self, root: TreeNode):
        result = []
        if not root:
            return result
        stack = [root]
        while stack:
            node = stack.pop()
            result.append(node.val)
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return result[::-1]