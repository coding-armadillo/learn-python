---
title: Variable and Data Types
tags:
  - Basic
  - Variable
  - Data Type
prev: ./setup.md
next: ./script.md
---

# Variable and Data Types

<TagLinks />

## Variable

A variable is a container that stores value.

Unlike some other languages, there is **NO** need to declare the type of a variable in Python.

For example, to create a variable called `number` of type int in Java

```java
int number;
number = 5;
```

But in Python, we can simply do

```py
number = 5
```

And by the way, Python does **NOT** require semi-colons at the end of each statement.

We can use any characters of any written languages to name the variables.

```py
π = 3.14159
jalapeño = "a hot pepper"
好吃 = "delicious"
```

## Number

Python can handle numbers with or without fractions. There are integer type (`int`) and decimal type (`float`).

```py
int_number = 5
float_number = 5.5
```

::: details Python also knows about i² = -1

Python also has a `complex` type to deal with complex numbers.

```py
complex_number = 1 + 2j
another_complex_number = complex(1, 2)
```

:::

## Text

Python use a type `str` to handle text or strings. Single/double quotes can be used to represent a string value.

```py
one_string = 'hello'
another_string = "world"
```

When there is a lot of text, use triple quotes to denote a blob of text

```py
a_large_string = '''
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Suspendisse pharetra convallis blandit.
Etiam egestas porta vehicula.
Aliquam est lorem, semper quis turpis vel, finibus iaculis eros.
Donec lobortis sollicitudin luctus.
Nullam faucibus semper lectus ac lobortis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Nam eget urna id diam scelerisque porta.
Sed placerat porttitor quam.
'''

another_large_string = """
Donec volutpat turpis in porta elementum.
Proin sed suscipit elit.
Donec eu dolor dignissim, iaculis tellus nec, hendrerit libero.
Aenean massa velit, eleifend in ultricies sed, luctus nec purus.
Integer non lacus consectetur, auctor ipsum in, ullamcorper orci.
Fusce nec erat a velit efficitur posuere.
Vestibulum non felis mi.
Vivamus ut malesuada enim, eget condimentum mi.
Donec venenatis volutpat blandit.
Praesent rutrum maximus urna scelerisque vestibulum.
Nulla aliquet porta nisi, quis vestibulum erat facilisis vitae.
Cras hendrerit arcu in lorem viverra eleifend.
"""
```

## Boolean

A boolean value can be either true (1) or false (0).
It can be used to represent whether a condition is met or not.

```py
true_value = True
false_value = False
```

## Some Basic Built-in Functions

As mentioned from previous [section](./introduction.md#About), Python comes with many useful functions.

We can display the value of a variable in command line using `print()`

```py
print(jalapeño)
```

We can check the date type of a variable using `type()`

```py
type(True)
```

or

```py
type(123)
```

We can also read value from keyboard in command line using `input()`

```py
city = input("what city do you live in? ")
```

::: tip
`"what city do you live in? "` is an argument of `input()`, it displays as a prompt in the command line to us.
We will learn more about arguments of a function in future section.

:::

Check out our response by

```py
print(city)
```

::: warning
Remember that `input()` always gives value in string
:::

## Assignment 1

Write some Python statements to ask our names then display "Hello, `name`".

The workflow the program is as follows:

1. First, the command line would prompt "What is your name? "

2. Suppose we enter "Jack".

3. Then, the command line displays "Hello, Jack"

::: details Sample Solution

<<< @/lesson/assignments/hello.py

:::
