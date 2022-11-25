class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # 前序
    def preorderTraversal(self, root: TreeNode):
        res = []

        def traversal(root: TreeNode):
            if not root:
                return
            res.append(root.val)  # 中
            traversal(root.left)  # 左
            traversal(root.right)  # 右
        traversal(root)
        return res

    # 中序
    def inorderTraversal(self, root: TreeNode):
        res = []

        def traversal(root: TreeNode):
            if not root:
                return
            traversal(root.left)  # 左
            res.append(root.val)  # 中
            traversal(root.right)  # 右
        traversal(root)
        return res

    # 后序
    def postorderTraversal(self, root: TreeNode):
        res = []

        def traversal(root: TreeNode):
            if not root:
                return
            traversal(root.left)  # 左
            traversal(root.right)  # 右
            res.append(root.val)  # 中
        traversal(root)
        return res
