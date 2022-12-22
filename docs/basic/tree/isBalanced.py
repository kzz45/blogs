# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if self.get_height(root) == -1:
            return False
        else:
            return True

    def get_height(self, root: TreeNode):
        if not root:
            return 0
        left = self.get_height(root.left)
        if left == -1:
            return -1
        right = self.get_height(root.right)
        if right == -1:
            return -1
        if abs(left - right) > 1:
            return -1
        else:
            return 1 + max(left, right)
