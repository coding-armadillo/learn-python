---
title: Operators
tags:
  - Basic
  - Operator
prev: ./script.md
next: ./comment.md
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

## Bitwise operators

To understand bitwise operations, we need to learn about binary numbers.

We use base ten numerals daily. When we see a decimal number `654,321`, it represents

| Hundreds<br>Thousands | Tens<br>Thousands | Thousands | Hundreds | Tens | Ones |
| :-------------------: | :---------------: | :-------: | :------: | :--: | :--: |
|           6           |         5         |     4     |    3     |  2   |  1   |

Or

| 10<sup>5</sup> | 10<sup>4</sup> | 10<sup>3</sup> | 10<sup>2</sup> | 10<sup>1</sup> | 10<sup>0</sup> |
| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |
|       6        |       5        |       4        |       3        |       2        |       1        |

Similarly, binary numbers is base two numerals. When we see a binary number `101010`, it represents

| 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
|       1       |       0       |       1       |       0       |       1       |       0       |

Therefore, the binary number `101010` has a decimal value of `42`.

Each column is considered a bit. When we perform bitwise operations, we do it on each matching bit of two binary numbers.

The truth table of `and`, `or`, and `exclusive or (xor)` is as follow:

| input |     | output  |         |         |
| :---: | :-: | :-----: | :-----: | :-----: |
|   x   |  y  | & (and) | \| (or) | ^ (xor) |
|   0   |  0  |    0    |    0    |    0    |
|   0   |  1  |    0    |    1    |    1    |
|   1   |  0  |    0    |    1    |    1    |
|   1   |  1  |    1    |    1    |    0    |

There is also negation.

| input | output  |
| :---: | :-----: |
|   x   | ~ (not) |
|   0   |    1    |
|   1   |    0    |

::: tip

These basic bitwise operations have corresponding hardware implementations ([logic gates](https://en.wikipedia.org/wiki/Logic_gate)).
An integrated circuit consists of many logic gates and other physical components.

:::

```py
print(4 << 5)
print(4 >> 2)
print(4 & 5)
print(4 | 5)
print(4 ^ 5)
print(~1)
```

::: warning

Applying `~` to a number in Python requires knowledge about [Two's complement](https://en.wikipedia.org/wiki/Two%27s_complement).
It also has to deal with sign (positive/negative). We may talk about this in future.

:::
