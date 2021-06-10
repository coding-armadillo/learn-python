---
title: Operators
tags:
  - Basic
  - Operator
prev: ./script.md
next: false
---

# Basic Operators

## Assignment Operator

```py
a = 1
b = "hello"
```

We can assignment multiple variables at the same time

```py
a, b = 1, "hello"
```

## Arithmetic operators

Basic arithmetic operations include:

- addition
- subtraction
- multiplication
- division
- modulus
- exponentiation
- floor division

```py
print(2 + 3)
print(2 - 3)
print(2 * 3)
print(2 / 3)
print(2 % 3)
print(2 ** 3)
print(2 // 3)
print(3 // 2)
```

::: tip

We can chain the assignment operator with arithmetic operators

```py
value = 100
value = value + 1
```

is equivalent to

```py
value = 100
value += 1
```

:::

## Assignment 2

Create a Python script named `circle.py` that prompts for the diameter (cm) of a circle and computes and displays the circle’s area and circumference.

You can assume π equals 3.14159.

Sample Run of the script looks like the following

```
python circle.py
Enter Diameter: 10
Area = 78.53975 cm²
Circumference = 31.4159 cm
```

::: tip

Since `input()` always returns a string, we need to cast the return value into a number.

To convert a string into an integer, we can

```py
int('123')
```

Similarly we can convert a string into a decimal number

```py
float('456')
```

Or we can convert a number into a string

```py
str(123.456)
```

:::

## Comparison operators

Say, we have

```py
x, y = 1, 2
```

The comparisons are as follow:

```py
print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)
```

A comparison operator always returns a boolean value (`True` / `False`).

## Logical Operators

We use logical operators to combine booleans (conditions).

If we set

```py
v = 10
```

then

```py
print(v > 2 and v < 8)
print(v > 2 or v < 8)
print(not v > 2)
print(not v < 8)
```

- `and` returns `True` if both booleans (conditions) are `True`
- `or` returns `True` if at least one of booleans (conditions) is `True`
- `not` negates the boolean (condition), returning `True` if given `False`, and vice versa
