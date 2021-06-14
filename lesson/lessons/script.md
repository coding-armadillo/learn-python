---
title: Python Scripts
tags:
  - Basic
  - Script
prev: ./variable-and-data-types.md
next: ./operator.md
---

# Python Scripts

<TagLinks />

We have tried using Python in the interactive shell.
In fact we can save our work in textual files and use editors to help developing Python codes.

## Assignment 1 explained

### Solution 1

Here's an example to solve [Assignment 1](./variable-and-data-types.md#assignment-1)

```py
print("Hello, " + input("What is your name? "))
```

The operator `+` concatenates two strings together.
We will talk more about **operators** in the next lesson.
Good job if you use it to solve Assignment 1, since you have put common senses into programming!

### Solution 2

Here's another way to solve this problem.

```py
print("Hello,", input("What is your name? "))
```

We don't need to use the operator `+` in this case.
Python's [print()](https://docs.python.org/3/library/functions.html#print) function can display not only one but multiple objects (values), separated by space by default.

### Solution 3

We can even solve it in a verbose way.

```py
name = input("What is your name? ")
print("Hello,", name)
```

### Save to file

A program file or script written in Python usually has the file extension `.py`.
We can ask the Python interpreter to execute a `.py` file (Python script).

Now let's create a file named `hello.py` and put either solution from above in the file.
Then open terminal and type the following command:

```bash
python hello.py
```

You should be able to type a name in command line and expect a greeting.

[![hello.py](https://asciinema.org/a/419439.svg)](https://asciinema.org/a/419439)
