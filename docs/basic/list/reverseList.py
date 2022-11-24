# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre = None
        cur = None
        while head:
            cur = head.next  # 抓手
            head.next = pre  # 反转
            pre = head
            head = cur      # 往下走
        return pre
