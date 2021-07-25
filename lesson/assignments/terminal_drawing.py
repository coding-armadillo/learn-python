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


mapping = {
    "1": square,
    "2": diamond,
    "3": triangle,
    "4": plus,
}

while True:
    print("1: square")
    print("2: diamond")
    print("3: triangle")
    print("4: plus")
    selection = input("Enter your selection: ")

    func = mapping.get(selection)

    if not func:
        print("Goodbye!")
        break

    func()

    print()
