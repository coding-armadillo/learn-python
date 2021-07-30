desc = "In mathematics, the Fibonacci numbers form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1."


def fib(n):  # return Fibonacci sequence up to n
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result


def use_fib():
    print(desc)
    print()
    n = int(input("where do you want the Fibonacci sequence to end by? "))
    print(f"The Fibonacci sequence is {fib(n)}")
