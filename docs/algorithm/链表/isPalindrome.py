class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# 栈的方式

# 1. 循环遍历链表放入栈中
# 2. 根据栈的特性先进后出
# 3. 弹出的部分再跟当前链表循环对比
# 4. 值一致就是回文


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        stack = []
        cur = head
        while cur:
            stack.append(cur)
            cur = cur.next
        while stack:
            now = stack.pop()
            if now.val != head.val:
                return False
            head = head.next
        return True


# 快慢指针方式
