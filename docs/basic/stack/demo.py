class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class Stack:
    def __init__(self):
        self.size = 0
        self.head = Node(0)

    def pop(self):
        if self.is_empty():
            return None
        poped = self.peek()
        self.head = self.head.next
        self.size -= 1
        return poped

    def push(self, val):
        node = Node(val)
        node.next = self.head.next
        self.head.next = node
        self.size += 1

    def peek(self):
        if not self.head:
            return None
        return self.head.val

    def size(self):
        return self.size

    def is_empty(self):
        return self.size == 0
