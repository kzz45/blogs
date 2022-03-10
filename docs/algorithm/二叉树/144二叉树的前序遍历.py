class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root: TreeNode):
        result = []
        def preorder(root: TreeNode):
            if not root:
                return result
            result.append(root.val)
            preorder(root.left)
            preorder(root.right)
        preorder(root)
        return result
            
