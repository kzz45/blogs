# 二叉树

[LeetCode Book](https://leetcode-cn.com/leetbook/detail/data-structure-binary-tree/)

## 定义

```py
class TreeNode: 
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
```

## 递归遍历

> 所谓前中后序只针对于根节点，而左右子节点永远都是先左后右的顺序。所以，前序就是：根左右！中序就是：左根右！后续就是：左右根！

- 前序遍历 根左右 [LeetCode题目](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

- 中序遍历 左根右 [LeetCode题目](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

- 后序遍历 左右根 [LeetCode题目](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

@[code py](144二叉树的前序遍历.py)


[105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

@[code](105.py)

## 迭代遍历

> 本质上是在模拟递归，因为在递归的过程中使用了系统栈，所以在迭代的解法中常用Stack来模拟系统栈。

@[code py](94二叉树的中序遍历.py)

## 层序遍历 

- [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- [107.二叉树的层次遍历II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
- [429. N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)

