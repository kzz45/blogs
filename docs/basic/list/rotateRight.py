# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 我们可以将链表先连成环，然后将链表在指定位置断开

# 先遍历一遍，求出链表节点个数 n。注意到 k 可能很大，我们只需将链表右移 k % n 个位置即可。

# 第二次遍历到 n - k % n 的位置，记录下断开后新链表头节点位置，再将其断开并返回新的头节点。


class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if k == 0 or not head or not head.next:
            return head
        n = 1
        cur = head
        # 遍历出链表的长度
        while cur.next:
            cur = cur.next
            n += 1

        cut = n - k % n
        cur.next = head
        while cut:
            cut -= 1
            cur = cur.next
        new_head = cur.next
        cur.next = None
        return new_head
