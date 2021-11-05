value = 0
stack = []


def add(x):
    global value
    value += x
    stack.append(("add", x))


def subtract(x):
    global value
    value -= x
    stack.append(("subtract", x))


def multiply(x):
    global value
    value *= x
    stack.append(("multiply", x))


def divide(x):
    global value
    value /= x
    stack.append(("divide", x))


def undo():
    global value
    if len(stack) > 0:
        operation, x = stack.pop()
        if operation == "add":
            value -= x
        elif operation == "subtract":
            value += x
        elif operation == "multiply":
            value /= x
        elif operation == "divide":
            value *= x


assert value == 0

add(1)
assert value == 1

add(2)
assert value == 3

undo()
assert value == 1

subtract(1)
assert value == 0

subtract(2)
assert value == -2

multiply(2)
assert value == -4

undo()
assert value == -2

undo()
assert value == 0

add(10)
assert value == 10

divide(2)
assert value == 5

divide(5)
assert value == 1

undo()
assert value == 5
