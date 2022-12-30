class CQueue:

    def __init__(self):
        self.instack = []
        self.outstack = []

    def appendTail(self, value: int) -> None:
        self.instack.append(value)

    def deleteHead(self) -> int:
        if len(self.outstack) == 0 and len(self.instack) == 0:
            return -1
        if len(self.outstack) == 0:
            while len(self.instack) != 0:
                self.outstack.append(self.instack[-1])
                self.instack.pop()
        top = self.outstack[-1]
        self.outstack.pop()
        return top


# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()
