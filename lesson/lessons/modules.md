---
title: Modules
tags:
  - Basic
  - Module
prev: ./functions.md
next: ./version-control.md
---

# Modules

<TagLinks />

When we first learn to code in Python, we use the interactive Python interpreter.
If we quit from the interpreter and enter it again, the statements are lost.

Therefore, we start using a text editor (VS Code) to store our codes and running them as scripts.
We also learn how to use functions to create modular pieces for our program.
As our program gets longer and more complex, we may split it into multiple files for better maintenance.

To support this idea, Python allows us to use the definitions (functions and variables) from a file in another script or in an interactive Python interpreter. Such a file is called a _module_.

## Custom module

A _module_ is not a lot different than a normal Python script. We can simply put the function and variable definitions in it and make those functions and variables accessible elsewhere.

For example, let's create a module file named `fibonacci.py` and define two functions and a variable in it.

<<< @/lesson/snippets/fibonacci.py

Then we can `import` the module and use the definitions in it.

```python{1}
import fibonacci

print(fibonacci.desc)
```

Sometimes we can use only parts of a module by the `from` keyword

```python{1}
from fibonacci import fib

print(fib(100))
```

We can rename the definitions with the `as` keyword

```python{1}
from fibonacci import use_fib as func

func()
```

## Package

When we group multiple modules together, we create a package. Modules can be managed in hierarchical folders for easy maintenance, with the help of `__init__.py` files.

Python considers folders that containing the `__init__.py` file as packages. Sometimes, `__init__.py` can be empty, but it can also run initialization codes if needed.

Here's the structure of a toy package.

```sh
foo
├── __init__.py
├── bar.py
└── baz
    ├── __init__.py
    └── qux.py
```

We can import the whole package or individual modules.

```python
import foo
import foo.bar
import foo.baz.qux
```

We may see usage of `from package import *`. By default, Python would not import any module in `package`.
However, we can define `__all__` in `__init__.py` to control what should be imported.

For example, when we define only "bar" in `__all__` of `foo/__init__.py`

<!-- prettier-ignore -->
<<< @/lesson/snippets/foo/__init__.py

`from foo import *` would import `bar`.

However, you can still explicitly import `baz` and its submodules.

```python
import foo.baz
from foo.baz import qux
```

## Built-in Packages

Python is battery-included. It comes with various packages for different use cases.

Use the `import` statement to import a package

```python{1}
import math

print(math.pow(2, 5))
```

To import only parts from a package, use the `from` keyword.

```python{1}
from datetime import datetime

print(datetime.now())
```

To rename when we import a package, use the `as` keyword

```python{1,2}
from datetime import datetime as dt
import math as m

print(m.pow(2, 5))
print(dt.now())
```

Do you remember the [guessing game](./control-flow.md#while-statements) we talk about when learning the `while` loop?
We can make it a real guessing game with some small changes.

Create a script named `real_guessing_game.py` and copy-paste the following codes.

<<< @/lesson/snippets/real_guessing_game.py{1,4,11}

To run it, simply

```sh
python real_guessing_game.py
```

The `random` module creates a real secret (random number within range 1 to 100) and we need to guess what it is.

::: tip how to guess effectively?

The program would tell us whether the guess is larger or smaller before we make the right guess.
What's the best strategy to guess the random number?

:::

## Python Package Index

The Python Package Index (PyPI) is a repository of software for the Python programming language.

To install a package from PyPI, we use `pip`, the package management system.

For example, we can install `Flask` to make web applications.

```sh
pip install Flask
```

Create a script (say, `flask_app.py`) with the following lines of codes

<<< @/lesson/snippets/flask_app.py

Then we can start the web application by running the script.

```sh
python flask_app.py
```

The Python community is robust and growing rapidly.
There are numerous packages for us to do amazing things in different domain.

For another example, we can create GUI interfaces with `PyQt`

```sh
pip install PyQt5
```

Create another script (say, `qt_app.py` with the following statements)

<<< @/lesson/snippets/qt_app.py

Similarly we can start the GUI application by running the script.

```sh
python qt_app.py
```

## Assignment 13

Restructure your codes for [Assignment 12](./functions.md#assignment-12).

Put all the definitions for different shape functions in a module called `shapes` and use them in a new script called `terminal_drawing2.py`.

You can refer to [Assignment 12](./functions.md#assignment-12) for the sample run. They should be identical.

::: details Sample Solution

The `shapes.py` file has the definitions.

<<< @/lesson/assignments/shapes.py

And the `terminal_drawing2.py` imports and uses them.

<<< @/lesson/assignments/terminal_drawing2.py

:::

## What do you want to create?

Brainstorm and find your passion. Let's discuss what to build 🔨 !
