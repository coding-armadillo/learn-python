weight_in_pounds = float(input("Enter weight in pounds: "))
height_in_inches = float(input("Enter height in inches: "))

bmi = weight_in_pounds / (height_in_inches * height_in_inches) * 703

print("BMI =", bmi)

if bmi <= 18.5:
    classification = "Underweight"
elif bmi <= 24.99:
    classification = "Normal Weight"
elif bmi <= 29.99:
    classification = "Overweight"
elif bmi <= 34.99:
    classification = "Obesity (Class 1)"
elif bmi <= 39.99:
    classification = "Obesity (Class 2)"
else:
    classification = "Morbid Obesity"

print("BMI Classification =", classification)
