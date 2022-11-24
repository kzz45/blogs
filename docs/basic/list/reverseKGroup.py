class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseKGroup(self, head: ListNode, k: int):
        start = head
        end = self.get_group_end(start, k)
        if end is None:
            return head
        head = end

        self.reverse(start, end)
        last_end = start
        while last_end.next != None:
            start = last_end.next
            end = self.get_group_end(start, k)
            if end is None:
                return head
            self.reverse(start, end)
            last_end.next = end
            last_end = start
        return head

    def reverse(self, start: ListNode, end: ListNode):
        end = end.next
        pre = None
        cur = start
        next = None
        while cur != end:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        start.next = end

    def get_group_end(self, start: ListNode, k: int):
        while k != 0 and start:
            start = start.next
            k = k - 1
        return start
