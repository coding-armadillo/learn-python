---
title: Control Flows
tags:
  - Basic
  - Control Flow
prev: ./comment.md
next: ./sequence-data-type.md
---

# Control Flows

<TagLinks />

We have learned how to use Python as a "calculator", i.e., creating variables, assigning values, and writing formulas to get an outcome.
In this lesson, we will work on control flows to make Python handle more situations and write more complex programs.

## `if` statements

In case we want to execute a block of codes only if a condition is met, `if` statements come in handy for this purpose.

Let's take a look at the following example.

<<< @/lesson/snippets/basic_if.py

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

<<< @/lesson/snippets/indent_1.py

The first `print(x)` is within the `body` of `if x > 0`. It is indented by 4 spaces.
However, the second `print(y)` and third `print(z)` are within the `body` of `if y < 100`.
They are both indented by 8 spaces.

These statements are to display value of `x` if `x` is greater than zero and further to display value of `y` and `z` if `y` is less than one hundred.

What if the indentation of the third `print(z)` changes.

<<< @/lesson/snippets/indent_2.py{6}

Now value of `z` will display as long as `x` is greater than zero, regardless of `y`.

### `elif`

An `if` statement can chain with zero or more `elif`, which reads as "else if".
An 'elif` branch works as additional steps to evaluate the conditions and run codes accordingly.

<<< @/lesson/snippets/basic_if_elif.py

### `else`

An `else` branch is the catch-all situation for an `if` statement, it runs if all the previous conditions return `False`

<<< @/lesson/snippets/basic_if_elif_else.py

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

::: details Sample Solution

<<< @/lesson/assignments/bmi_calculator.py

:::

## `while` statements

With the `while` loop we can execute a set of statements as long as a condition is met.

Let's take a look at the following example.

<<< @/lesson/snippets/basic_while.py

**Notice that**

- the `condition` to control the `while` loop is `i < 10`
- the body of the `while` loop is also indented

In plain language, the `while` loop tries to display the value of i as long as i is less than ten.
And within each iteration of the loop, i increments by 1.

::: tip

It's important to change the value of some variable that has impact on the condition eventually.
Otherwise the `while` statements would never end and become an infinite loop.

Use `while` loop when we are not sure about how many times the loop shall run but we know the condition to continue.

For example, a simple guessing game

<<< @/lesson/snippets/guessing_game.py

:::

### `break`

We can use `break` to stop and escape the loop.

<<< @/lesson/snippets/basic_while_break.py{3,4}

The loop above would only display 0 to 4 since when i equals 5, the loop terminates.

### `continue`

We can use `continue` to skip and continue on with the next iteration of the loop.

<<< @/lesson/snippets/basic_while_continue.py{4,5}

The loop above would only display all the integers from 1 to 10 except for 5 (notice the increment of i is moved to the beginning of the body). The reason is that when i equals 5, the loop jumps out current iteration (not displaying the value) and then continue on to the next, until i is no less than ten.

## Assignment 4

Create a Python script named `square.py` that prompts for length of a square. The script will then display a square of the given length in the terminal.

You can use any character to represent the side of a square. A sample run would look like the following

```sh
python square.py
Enter length: 5
*****
*   *
*   *
*   *
*****
```

::: tip

The terminal only draws character row by row. To generate a square in terminal, we need to put ourself in the shoe of a terminal. Think of these questions:

1. How do I draw the first row?
2. How do I draw the next row?
3. How do I draw the last row?

By the way, the `*` operator can be applied on strings. It would duplicate that string multiple times, depending on the value from the right hand side of `*`.

Say, `print("=" * 3)` would display `===`

`print("Hello" * 2)` would display `HelloHello`

:::

::: details Sample Solution

<<< @/lesson/assignments/square.py

:::

## `for` statements

`for` is another primitive loop statement in Python. It's used to iterate over a sequence (we will talk about more date types, such as list and dictionary, in the next lesson.)

First, let's see how to use `for` in a string (a string is sequence of characters).

<<< @/lesson/snippets/for_string.py

It iterates all the characters in the string `"calgary"` and display them line by line.

We usually use the [`range()`](https://docs.python.org/3/library/functions.html#func-range) function to loop through a body of codes for a specific number of times.

<<< @/lesson/snippets/for_range.py

`range()` would return a sequence of numbers (loop counters). If not specified otherwise, it always starts at **0**.

`range(5)` from above returns numbers 0, 1, 2, 3, 4 particularly.

We can also specify the start/stop/step values of the sequence.

<<< @/lesson/snippets/more_range.py

### `break` and `continue`

`break` and `continue` also works in `for` loop

<<< @/lesson/snippets/for_break_continue.py

## Assignment 5

Create a Python script named `diamond.py` that prompts for rows of a diamond, where the number of rows shall be odd. The script will then display a diamond with the given number of rows in the terminal.

A sample run looks like the following.

```sh
python diamond.py
Enter number of rows: 21
          *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************
*********************
 *******************
  *****************
   ***************
    *************
     ***********
      *********
       *******
        *****
         ***
          *
```

::: details Sample Solution

<<< @/lesson/assignments/diamond.py

:::

## Quote

![practice-makes-perfect](https://www.azquotes.com/picture-quotes/quote-practice-makes-perfect-after-a-long-time-of-practicing-our-work-will-become-natural-bruce-lee-92-45-55.jpg)

## Assignment 6

Create a Python script named `triangle.py` that prompts for rows of a triangle. The script will then display a triangle with the given number of rows in the terminal.

A sample run looks like the following.

```sh
python triangle.py
Enter number of rows for the triangle: 7
      *
     **
    ***
   ****
  *****
 ******
*******
```

::: details Sample Solution

TBD

:::

## Assignment 7

Create a Python script named `plus.py` that prompts for rows of a plus sign. The script will then display a plus sign with the given number of rows in the terminal.

A sample run looks like the following.

```sh
python plus.py
Enter number of rows for the plus: 11
     *
     *
     *
     *
     *
***********
     *
     *
     *
     *
     *
```

::: details Sample Solution

TBD

:::

## Assignment 8

Create a Python script name `grades.py` that prompts for a percentage grade and turns it into a letter grade and 4.0 scale.

You can use the following conversion table

| Percent Grade | Letter Grade | 4.0 Scale |
| ------------- | ------------ | --------- |
| 97-100        | A+           | 4.0       |
| 93-96         | A            | 4.0       |
| 90-92         | A-           | 3.7       |
| 87-89         | B+           | 3.3       |
| 83-86         | B            | 3.0       |
| 80-82         | B-           | 2.7       |
| 77-79         | C+           | 2.3       |
| 73-76         | C            | 2.0       |
| 70-72         | C-           | 1.7       |
| 67-69         | D+           | 1.3       |
| 65-66         | D            | 1.0       |
| Below 65      | F            | 0.0       |

A sample run looks like the following.

```sh
python grades.py
Enter a percentage grade: 98
Letter Grade = A+
4.0 Scale = 4.0
```

::: details Sample Solution

TBD

:::

## Assignment 9

Create a Python script named `odd_or_even.py` that would keep prompting for a number and tell if that number is odd or even. The script exists if the user enters a negative number.

A sample run looks like the following.

```sh
python odd_or_even.py
Enter a number: 3
Odd number
Enter a number: 2
Even Number
Enter a number: 1
Odd number
Enter a number: 0
Even Number
Enter a number: -1
See you later!
```

::: details Sample Solution

TBD

:::
