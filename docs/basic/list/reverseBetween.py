# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 第 1 步：先将待反转的区域反转
# 第 2 步：把 pre 的 next 指针指向反转以后的链表头节点，把反转以后的链表的尾节点的 next 指针指向 succ


class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        def reverse(head: ListNode):
            pre = None
            cur = head
            while cur:
                temp = cur.next
                cur.next = pre
                pre = cur
                cur = temp

        dummy = ListNode(0)
        dummy.next = head
        pre = dummy
        # 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
        for _ in range(left - 1):
            pre = pre.next
        # 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
        right_node = pre
        for _ in range(right - left + 1):
            right_node = right_node.next
        # 第 3 步：切断出一个子链表（截取链表）
        left_node = pre.next
        cur = right_node.next
        # 切断链接
        pre.next = None
        right_node.next = None
        # 第 4 步：同第 206 题，反转链表的子区间
        reverse(left_node)
        # 第 5 步：接回到原来的链表中
        pre.next = right_node
        left_node.next = cur
        return dummy.next
