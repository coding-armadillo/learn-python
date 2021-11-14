class Calculator:
    def __init__(self, value=0):
        self.value = value
        self.stack = []

    def add(self, value):
        self.value += value
        self.stack.append(("add", value))

    def subtract(self, value):
        self.value -= value
        self.stack.append(("subtract", value))

    def multiply(self, value):
        self.value *= value
        self.stack.append(("multiply", value))

    def divide(self, value):
        self.value /= value
        self.stack.append(("divide", value))

    def undo(self):
        operation, value = self.stack.pop()
        if operation == "add":
            self.value -= value
        elif operation == "subtract":
            self.value += value
        elif operation == "multiply":
            self.value /= value
        elif operation == "divide":
            self.value *= value


calculator = Calculator(10)
assert calculator.value == 10

calculator.add(1)
assert calculator.value == 11

calculator.add(3)
assert calculator.value == 14

calculator.undo()
assert calculator.value == 11

calculator.subtract(1)
assert calculator.value == 10

calculator.subtract(2)
assert calculator.value == 8

calculator.multiply(2)
assert calculator.value == 16

calculator.undo()
assert calculator.value == 8

calculator.undo()
assert calculator.value == 10

calculator.add(10)
assert calculator.value == 20

calculator.divide(2)
assert calculator.value == 10

calculator.divide(5)
assert calculator.value == 2

calculator.undo()
assert calculator.value == 10
