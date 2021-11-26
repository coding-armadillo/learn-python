---
title: Classes and Objects
tags:
  - Object-oriented Programming
  - Class
prev: ./coding-challenge.md
next: ./virtual-env.md
---

# Python Classes and Objects

<TagLinks />

Python is also an object oriented programming language.
Almost everything in Python is an object, coming with its properties and methods.
A `class` is like an object constructor, or a guideline for creating objects.

## What's Object-oriented programming

[According to wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming):

> Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
> A feature of objects is that an object's own procedures can access and often modify the data fields of itself. In OOP, computer programs are designed by making them out of objects that interact with one another.

## Python class

To create a class, use the keyword `class`:

<<< @/lesson/snippets/class_empty.py

We just create a class named `Empty` that has nothing (no properties) and does nothing (no methods).

### The constructor function

The examples above is class in its simplest form, and is not useful at all.

To understand the meaning of classes we have to understand the built-in `__init__()` function.

All classes have a function called `__init__()`, which is always executed when the class is being initiated.

Usually we initialize the properties of an object in the `__init__()` function.

For instance, we have a `Laptop` class. For every `Laptop` object, the initial battery level is set to 60%.

<<< @/lesson/snippets/class_laptop_1.py{3}

In convention the argument `self` represents the instance of the class. We can access the attributes and methods of the class by referencing `self`.
Line 3 from the example above defines the `battery_level` property of a `Laptop` object.

### Create an object

We can use the class `Laptop` to create an object.

```python
laptop = Laptop()
print(laptop.battery_level)
```

### The constructor function cont'd

In fact, we can modify the `__init__()` so that it takes multiple arguments to configure the initial values for a `Laptop` object.

Say, we want to define the brand and color properties.
In this case we need to provide `brand` and `color` when we create the `Laptop` object.
Therefore we can access those properties afterwards.

<<< @/lesson/snippets/class_laptop_2.py{2-4,11,12}

### The \_\_str\_\_ function

In Python the `__str__()` function represents the class objects as a string. It is called when we try to `print()` or cast the object to string (`str()`).

We can define our own way to represent a `Laptop` object.

<<< @/lesson/snippets/class_laptop_3.py{7-11,17,18}

### The object methods

We can define custom functions that belong to the object and thus have access to the internal properties.

Say, we are to create `charge()` and `use()` functions for each `Laptop` object:

1. `charge()` takes in one argument to represent minutes of charge, and for every **5** minutes of charge the battery level would increase by 1. Print a message if the battery is fully charged and states the minutes used for charging.

2. `use()` takes in one argument to represent minutes of use, and for every **10** minutes of use the battery level would decrease by 1.

<<< @/lesson/snippets/class_laptop_4.py{23,24}

::: tip Question

How would you modify the `use()` function so that it prints a message if battery runs out?

:::

## Assignment 24

Create a script named `calculator.py`. Inside the script, define a `Calculator` class that performs the same actions as mentioned in [Assignment 23](./coding-challenge.md#assignment-23).

The `Calculator` class shall allow users to define the initial value. It comes with functions to add/subtract/multiply/divide/undo so that the value of the calculator can be altered accordingly.

Use the following template to test your `Calculator` object.

```python{2}
class Calculator:
    pass

calculator = Calculator(10)
assert calculator.value == 10

calculator.add(1)
assert calculator.value == 11

calculator.add(3)
assert calculator.value == 14

calculator.undo()
assert calculator.value == 11

calculator.subtract(1)
assert calculator.value == 10

calculator.subtract(2)
assert calculator.value == 8

calculator.multiply(2)
assert calculator.value == 16

calculator.undo()
assert calculator.value == 8

calculator.undo()
assert calculator.value == 10

calculator.add(10)
assert calculator.value == 20

calculator.divide(2)
assert calculator.value == 10

calculator.divide(5)
assert calculator.value == 2

calculator.undo()
assert calculator.value == 10
```

::: details Sample Solution

<<< @/lesson/assignments/calculator.py

:::
