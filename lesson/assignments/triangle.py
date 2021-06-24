rows = int(input("Enter number of rows for the triangle: "))

for i in range(rows):
    print(" " * (rows - i - 1) + "*" * (i + 1))
