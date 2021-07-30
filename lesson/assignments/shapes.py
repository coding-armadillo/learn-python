def square():
    rows = int(input("Enter number of rows for the square: "))

    row = 0

    while row < rows:
        if row == 0 or row == rows - 1:
            print("*" * rows)
        else:
            print("*" + " " * (rows - 2) + "*")

        row += 1


def triangle():
    rows = int(input("Enter number of rows for the triangle: "))

    for i in range(rows):
        print(" " * (rows - i - 1) + "*" * (i + 1))


def plus():
    while True:
        rows = int(input("Enter number of rows for the plus: "))
        if rows % 2:
            break

    i = 0
    while i < rows:
        if i != rows // 2:
            print(" " * (rows // 2) + "*")
        else:
            print("*" * rows)
        i += 1


def diamond():
    while True:
        rows = int(input("Enter number of rows for the diamond: "))
        if rows % 2:
            break

    for i in range(0, rows // 2):
        print(" " * (rows // 2 - i) + "*" * (2 * i + 1))

    print("*" * rows)

    for i in range(rows // 2 - 1, -1, -1):
        print(" " * (rows // 2 - i) + "*" * (2 * i + 1))
