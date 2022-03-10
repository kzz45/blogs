class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 递归方式

class Solution:
    # 前序
    def preorderTraversal(self, root: TreeNode):
        result = []
        def traversal(root: TreeNode):
            if not root:
                return result
            result.append(root.val) # 前序
            traversal(root.left)     # 左
            traversal(root.right)    # 右
        traversal(root)
        return result
    # 中序
    def inorderTraversal(self, root: TreeNode):
        result = []
        def traversal(root: TreeNode):
            if not root:
                return result
            traversal(root.left)     # 左
            result.append(root.val)  # 中序
            traversal(root.right)    # 右
        traversal(root)
        return result
    # 后序
    def postorderTraversal(self, root: TreeNode):
        result = []
        def traversal(root: TreeNode):
            if not root:
                return result
            traversal(root.left)     # 左
            traversal(root.right)    # 右
            result.append(root.val)  # 后序
        traversal(root)
        return result
