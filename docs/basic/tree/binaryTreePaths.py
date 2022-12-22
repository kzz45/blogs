# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def binaryTreePaths(self, root: TreeNode):
        result = []
        path = ""
        if not root:
            return result
        self.traversal(root, path, result)
        return result

    def traversal(self, cur: TreeNode, path: str, result):
        path += str(cur.val)
        if not cur.left and not cur.right:
            result.append(path)
        if cur.left:
            self.traversal(cur.left, path + "->", result)
        if cur.right:
            self.traversal(cur.right, path + "->", result)
