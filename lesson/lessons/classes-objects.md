---
title: Classes and Objects
tags:
  - Object-oriented Programming
  - Class
prev: ./coding-challenge.md
next: null
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

```python
class Empty:
    pass
```

We just create a class named `Empty` that has nothing (no properties) and does nothing (no methods).

### The constructor function

The examples above is class in its simplest form, and is not useful at all.

To understand the meaning of classes we have to understand the built-in `__init__()` function.

All classes have a function called `__init__()`, which is always executed when the class is being initiated.

Usually we initialize the properties of an object in the `__init__()` function.

For instance, we have a `Laptop` class. For every `Laptop` object, the initial battery level is set to 60%.

```python{3}
class Laptop:
    def __init__(self):
        self.battery_level = 60
```

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

```python
class Laptop:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.battery_level = 60

dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

print(dell.brand, dell.color)
print(apple.brand, apple.color)
```

### The \_\_str\_\_ function

In Python the `__str__()` function represents the class objects as a string. It is called when we try to `print()` or cast the object to string (`str()`).

We can define our own way to represent a `Laptop` object.

```python{7-11,16,17}
class Laptop:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.battery_level = 60

    def __str__(self):
        return (
            f"This is a {self.color} {self.brand.capitalize()} laptop"
            f" with {self.battery_level:.2f}% of battery"
        )

dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

print(dell)
print(str(apple))
```

### The object methods

```python
class Laptop:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.battery_level = 60

    def __str__(self):
        return (
            f"This is a {self.color} {self.brand.capitalize()} laptop"
            f" with {self.battery_level:.2f}% of battery"
        )

    def charge(self, minutes):
        previous_battery_level = self.battery_level
        self.battery_level = min(100, self.battery_level + minutes/5)
        if self.battery_level == 100:
            print(
                "Battery is fully charged, taking",
                (100 - previous_battery_level) * 5,
                "minutes"
            )

    def use(self, minutes):
        self.battery_level = max(0, self.battery_level - minutes/10)

dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

apple.charge(5)
dell.charge(20000)

apple.use(60)
dell.use(10000)

print(dell)
print(str(apple))
```

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
