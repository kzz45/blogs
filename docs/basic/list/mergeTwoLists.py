class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode):
        if list1 is None or list2 is None:
            return list2 if list1 is None else list1

        head = ListNode(0)

        if list1.val <= list2.val:
            head = list1
        else:
            head = list2

        cur1 = head.next
        if head == list1:
            cur2 = list2
        else:
            cur2 = list1
        pre = head
        while cur1 and cur2:
            if cur1.val <= cur2.val:
                pre.next = cur1
                cur1 = cur1.next
            else:
                pre.next = cur2
                cur2 = cur2.next
            pre = pre.next
        if cur1:
            pre.next = cur1
        else:
            pre.next = cur2
        return head
