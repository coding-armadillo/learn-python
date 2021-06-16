---
title: Control Flows
tags:
  - Basic
  - Control Flow
prev: ./comment.md
next: false
---

# Control Flows

We have learned how to use Python as a "calculator", i.e., creating variables, assigning values, and writing formulas to get an outcome.
In this lesson, we will work on control flows to make Python handle more situations and write more complex programs.

## `if` statements

In case we want to execute a block of codes only if a condition is met, `if` statements come in handy for this purpose.

Let's take a look at the following example.

```py
a , b = 10, 100
if b > a:
    print("a is less than b")
```

An `if` statement consists of at least two parts:

- a `condition`
- a block (or `body`) of codes to execute if `condition` satisfies

In the previous example,

- the `condition` is whether `b > a`
- the code to run is to display `"a is less than b"`

**Notice that**

- the `condition` is a statement with [comparison operators](./operator.md#comparison-operators). In fact, we can use any form of statement as long as that statement returns a boolean. Thus, [logical operators](operator.md#logical-operators) would also work. Or simply placing a `True` or `False` as the `condition`.
- the `condition` ends with a `:`. This is the structure of an `if` statement. The Python interpreter knows it would expect some codes to fill the `body`
- the code in `body` is _indented_. Python **always** uses indentation to control the flow of codes, unlike other languages that may use a pair of `{}`. The best practice is to use **4 spaces** as indentation.
- Indentation can be nested if we choose to use nested structures.

Here's another example.

```py
x , y, z = 10, 20, 30
if x > 0:
    print(x)
    if y < 100:
        print(y)
        print(z)
```

The first `print(x)` is within the `body` of `if x > 0`. It is indented by 4 spaces.
However, the second `print(y)` and third `print(z)` are within the `body` of `if y < 100`.
They are both indented by 8 spaces.

These statements are to display value of `x` if `x` is greater than zero and further to display value of `y` and `z` if `y` is less than one hundred.

What if the indentation of the third `print(z)` changes.

```py
x , y, z = 10, 200, 30
if x > 0:
    print(x)
    if y < 100:
        print(y)
    print(z)
```

Now value of `z` will display as long as `x` is greater than zero, regardless of `y`.

### elif

An `if` statement can chain with zero or more `elif`, which reads as "else if".
An 'elif` branch works as additional steps to evaluate the conditions and run codes accordingly.

```py
x = - 10

if x > 0:
    print("x is greater than 0")
elif x == 0:
    print("x is 0")
elif x < 0:
    print("x is less than 0")
```

### else

An `else` branch is the catch-all situation for an `if` statement, it runs if all the previous conditions return `False`

```py
x = - 10

if x > 0:
    print("x is greater than 0")
elif x == 0:
    print("x is 0")
elif x > -10:
    print("x is less than 0 but somehow greater than -10")
else:
    print("x is not greater than -10")
```

## Assignment 3

Create a Python script named `bmi_calculator.py` that prompts for weight in pounds and height in inches. The script will then calculate and display the body mass index (BMI). It will also prompt the BMI classification.

BMI = (Weight in Pounds / (Height in inches x Height in inches)) x 703

The BMI classification is as follows.

|      BMI      | BMI Classification |
| :-----------: | :----------------: |
| 18.5 or less  |    Underweight     |
| 18.5 to 24.99 |   Normal Weight    |
|  25 to 29.99  |     Overweight     |
|  30 to 34.99  | Obesity (Class 1)  |
|  35 to 39.99  | Obesity (Class 2)  |
| 40 or greater |   Morbid Obesity   |

A sample run of the script would look like

```sh
python bmi_calculator.py
Enter weight in pounds: 200
Enter height in inches: 69
BMI = 29.531611006091154
BMI Classification = Overweight
```

## `while` statements

## `for` statements

## Assignment 4
