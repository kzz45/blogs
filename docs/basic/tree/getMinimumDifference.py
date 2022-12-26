# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        res = []

        def build_list(root: TreeNode):
            if not root:
                return None
            if root.left:
                build_list(root.left)
            res.append(root.val)
            if root.right:
                build_list(root.right)
            return res

        build_list(root)
        min_val = float("inf")
        for i in range(len(res) - 1):
            min_val = min(abs(res[i] - res[i + 1]), min_val)
        return min_val
