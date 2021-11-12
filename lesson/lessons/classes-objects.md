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

All classes have a function called **init**(), which is always executed when the class is being initiated.

### Create an object

### The object methods
