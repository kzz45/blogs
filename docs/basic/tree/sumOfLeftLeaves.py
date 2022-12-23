# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if not root:
            return 0
        if not root.left and not root.right:
            return 0
        left_val = self.sumOfLeftLeaves(root.left)
        if root.left and not root.left.left and not root.left.right:
            left_val = root.left.val
        right_val = self.sumOfLeftLeaves(root.right)
        return left_val + right_val