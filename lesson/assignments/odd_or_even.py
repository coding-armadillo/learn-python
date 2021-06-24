while True:
    number = int(input("Enter a number: "))
    if number < 0:
        print("See you later!")
        break
    elif number % 2:
        print("Odd number")
    else:
        print("Even Number")
