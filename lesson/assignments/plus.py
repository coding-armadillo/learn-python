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
