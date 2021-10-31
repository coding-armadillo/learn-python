def is_valid(s):
    stack = []
    for char in s:
        if char in ["(", "[", "{"]:
            stack.append(char)
        elif char in [")", "]", "}"]:
            if len(stack) == 0:
                return False
            last = stack.pop()
            if char == ")" and last != "(":
                return False
            elif char == "]" and last != "[":
                return False
            elif char == "}" and last != "{":
                return False

    return len(stack) == 0


assert is_valid("()") is True
assert is_valid("()[]{}") is True
assert is_valid("(]") is False
assert is_valid("([)]") is False
assert is_valid("{[]}") is True
assert is_valid("") is True
