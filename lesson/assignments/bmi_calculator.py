weight_in_pounds = float(input("Enter weight in pounds: "))
height_in_inches = float(input("Enter height in inches: "))

bmi = weight_in_pounds / (height_in_inches * height_in_inches) * 703

print("BMI =", bmi)

if bmi <= 18.5:
    classification = "Underweight"
elif bmi <= 25:
    classification = "Normal Weight"
elif bmi <= 30:
    classification = "Overweight"
elif bmi <= 35:
    classification = "Obesity (Class 1)"
elif bmi <= 40:
    classification = "Obesity (Class 2)"
else:
    classification = "Morbid Obesity"

print("BMI Classification =", classification)
