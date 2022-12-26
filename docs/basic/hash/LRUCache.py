class ListNode:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.hashmap = {}
        self.head = ListNode()
        self.tail = ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head

    def remove_node(self, node: ListNode):
        node.prev.next = node.next
        node.next.prev = node.prev

    def add_to_head(self, node: ListNode):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node

    def move_to_head(self, node: ListNode):
        self.remove_node(node)
        self.add_to_head(node)

    def remove_tail(self):
        node = self.tail.prev
        self.remove_node(node)
        return node

    def get(self, key: int) -> int:
        if key not in self.hashmap:
            return -1

        node = self.hashmap[key]
        self.move_to_head(node=node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key not in self.hashmap:
            node = ListNode(key, value)
            self.hashmap[key] = node
            self.add_to_head(node)
            self.size += 1
            if self.size > self.capacity:
                removed = self.remove_tail()
                self.hashmap.pop(removed.key)
                self.size -= 1
        else:
            node = self.hashmap[key]
            node.val = value
            self.move_to_head(node)


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
