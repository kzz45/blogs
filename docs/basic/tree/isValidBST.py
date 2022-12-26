# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        def traversal(root: TreeNode, pre_val: float("-inf")):
            if not root:
                return True
            left_bst = traversal(root.left, pre_val)  # 左
            if not left_bst:
                return False
            if root.val <= pre_val:
                return False
            else:
                pre_val = root.val
            return traversal(root.right, pre_val)  # 右
        return traversal(root, -100)
