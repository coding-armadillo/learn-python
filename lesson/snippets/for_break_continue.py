for j in range(1, 10):
    if j % 2:
        odd_or_even = "odd"
    else:
        odd_or_even = "even"
    if j == 5:
        print("skipping 5")
        continue
    elif j == 7:
        print("leaving early at 7")
        break
    print(j, "is", odd_or_even)
