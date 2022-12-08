# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        stack = []
        cur = head
        while cur:
            stack.append(cur)
            cur = cur.next
        while stack:
            xxx = stack.pop()
            if xxx.val != head.val:
                return False
            head = head.next
        return True
