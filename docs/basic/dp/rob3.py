# 如果抢了当前节点，那么孩子结点就不能抢
# 如果没有抢当前节点，可以抢左右孩子节点

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rob(self, root: TreeNode) -> int:
        if not root:
            return 0
        if not root.left and not root.right:
            return root.val
        # 抢父节点
        val_1 = root.val
        if root.left:
            val_1 += self.rob(root.left.left) + self.rob(root.left.right)
        if root.right:
            val_1 += self.rob(root.right.left) + self.rob(root.right.right)
        # 不抢父节点
        val_2 = self.rob(root.left) + self.rob(root.right)
        return max(val_1, val_2)

    def rob2(self, root: TreeNode):
        dp = self.traversal(root)
        return max(dp)

    def traversal(self, root: TreeNode):
        # 空节点，不偷
        if not root:
            return (0, 0)
        left = self.traversal(root.left)
        right = self.traversal(root.right)
        # 不偷当前节点, 偷子节点
        val_1 = max(left[0], left[1]) + max(right[0], right[1])
        # 偷当前节点, 不偷子节点
        val_2 = root.val + left[0] + right[0]
        return (val_1, val_2)
