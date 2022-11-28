class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: TreeNode):
        result = []
        if not root:
            return result
        from collections import deque
        que = deque([root])
        while que:
            size = len(que)
            res = []
            for _ in range(size):
                cur = que.popleft()
                res.append(cur.val)
                if cur.left:
                    que.append(cur.left)
                if cur.right:
                    que.append(cur.right)
            result.append(res)
        return result
