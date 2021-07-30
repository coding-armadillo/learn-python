from shapes import square, diamond, triangle, plus

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
