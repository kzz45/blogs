# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        # 快慢指针初始化指向 head
        slow = fast = head
        while fast and fast.next:
            # 慢指针走一步，快指针走两步
            slow = slow.next
            fast = fast.next.next
            # 快慢指针相遇，说明含有环
            if slow == fast:
                break
        # fast 遇到空指针说明没有环
        if fast is None or fast.next is None:
            return None
        slow = head
        # 快慢指针同步前进，相交点就是环起点
        while slow != fast:
            slow = slow.next
            fast = fast.next
        return slow
