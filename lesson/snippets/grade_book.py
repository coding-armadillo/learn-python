grade_book = {
    "Jack": [80, 81, 90, 92, 99],
    "John": [66, 100, 88, 98, 70, 80, 79],
    "Jill": [88, 59, 100],
}

for name, grades in grade_book.items():
    print(f"{name}'s average grades is {sum(grades) / len(grades)}")
