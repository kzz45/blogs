from typing import List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if preorder is None or inorder is None or len(preorder) != len(inorder):
            return None
        hmap = {element: i for i, element in enumerate(inorder)}

        return self.f(preorder, 0, len(preorder) - 1, inorder, 0, len(inorder) - 1, hmap)

    def f(
        self,
        preorder: List[int],
        L1: int,
        R1: int,
        inorder: List[int],
        L2: int,
        R2: int,
        hmap,
    ) -> TreeNode:
        if L1 > R1:
            return None

        head = TreeNode(preorder[L1])

        if L1 == R1:
            return head

        find = hmap[preorder[L1]]
        # find = L2
        # while inorder[find] != preorder[L1]:
        #     find+=1

        head.left = self.f(preorder, L1 + 1, L1 + find - L2, inorder, L2, find - 1, hmap)
        head.right = self.f(preorder, L1 + find - L2 + 1, R1, inorder, find + 1, R2, hmap)
        return head
