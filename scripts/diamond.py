while True:
    rows = int(input("Enter number of rows: "))
    if rows % 2:
        break

for i in range(0, rows // 2):
    print(" " * (rows // 2 - i) + "*" * (2 * i + 1))

print("*" * rows)


for i in range(rows // 2 - 1, -1, -1):
    print(" " * (rows // 2 - i) + "*" * (2 * i + 1))

# or
# for i in range(rows // 2 + 1, rows):
#     print(" " * (i - rows // 2) + "*" * (2 * (rows - i) - 1))
