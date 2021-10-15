import csv
from math import sqrt
from random import random

number = int(input("Enter number of triangles: "))

triangles = []
for _ in range(number):
    a = 10 + random() * 90
    b = 20 + random() * 70

    diff = abs(a - b)
    while True:
        c = diff + (a + b - diff) * random()
        if c != diff:
            break

    triangles.append((a, b, c))


def area(a, b, c):
    p = (a + b + c) / 2
    return sqrt(p * (p - a) * (p - b) * (p - c))


with open("triangles.csv", "w") as f:
    writer = csv.writer(f)
    writer.writerow(["a", "b", "c", "area"])
    writer.writerows([[a, b, c, area(a, b, c)] for a, b, c in triangles])

print(f"{number} triangles generated")
