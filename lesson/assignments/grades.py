percentage_grade = int(input("Enter a percentage grade: "))

if percentage_grade < 65:
    letter_grade = "F"
    scale = 0.0
elif percentage_grade < 67:
    letter_grade = "D"
    scale = 1.0
elif percentage_grade < 70:
    letter_grade = "D+"
    scale = 1.3
elif percentage_grade < 73:
    letter_grade = "C-"
    scale = 1.7
elif percentage_grade < 77:
    letter_grade = "C"
    scale = 2.0
elif percentage_grade < 80:
    letter_grade = "C+"
    scale = 2.3
elif percentage_grade < 83:
    letter_grade = "B-"
    scale = 2.7
elif percentage_grade < 87:
    letter_grade = "B"
    scale = 3.0
elif percentage_grade < 90:
    letter_grade = "B+"
    scale = 3.3
elif percentage_grade < 93:
    letter_grade = "A-"
    scale = 3.7
elif percentage_grade < 97:
    letter_grade = "A"
    scale = 4.0
else:
    letter_grade = "A+"
    scale = 4.0

print("Letter Grade =", letter_grade)
print("4.0 Scale =", scale)
