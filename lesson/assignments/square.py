length = int(input("Enter length: "))

line_number = 0

while line_number < length:
    if line_number == 0 or line_number == length - 1:
        print("*" * length)
    else:
        print("*" + " " * (length - 2) + "*")

    line_number += 1
