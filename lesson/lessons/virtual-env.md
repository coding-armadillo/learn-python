---
title: Virtual Environment
tags:
  - Basic
  - Virtual Environment
prev: ./classes-objects.md
next: null
---

# Virtual Environment

We talked about [Python Package Index (PyPi)](./modules.md#python-package-index) earlier before.
There are tons of useful libraries in the Python community.
Today we are going to learn a practical way to use them in our project.

## Why we need virtual environments

When we use the `pip` command to install a library from PyPi, we are going to install it in the system Python environment if not specified otherwise. Such exercise could be problematic if we have multiple projects relying on the same library yet requiring different versions of the same library.
If we only manage the libraries by the single system-wise Python environment, we would only be able to meet the needs for a or only few projects. The conflict cannot be solved.

In light of the need to manage different libraries for different projects, we normally use a virtual environment to create an isolated environment for Python project. It allows each project to define its own dependencies (a set of libraries),regardless of what other projects need.

::: tip Semantic Versioning

When we look for a library in PyPi, we may notice it has version number.

Say, `Django 3.2.9`. It means the current version of the `Django` library is `3.2.9` where

3 is the major version, 2 is minor version, and 9 is the path version.

Given a version number MAJOR.MINOR.PATCH, the number would increment:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

:::

## The `venv` module

There are a handful of famous libraries to handle virtual environments.
We are going to use [`venv`](https://docs.python.org/3/tutorial/venv.html) that comes with Python.

### Create a virtual environment

To create a virtual environment, simply run the `venv` module as a script with the desired name for the virtual environment.

```sh
python -m venv venv
```

In the example code above `python -m venv` is to execute the `venv` module in command line, the second `venv` is the name fo the virtual environment. In convention, we normally use `venv` as the name for a virtual environment.
It will create a folder with the name `venv` in the directory where you execute the command from.

### Activate a virtual environment

In order to use the virtual environment, we have to activate it in the command line.

On Windows, run:

```sh
.\venv\Scripts\activate
```

On MacOS, run:

```sh
source venv/bin/activate
```

We should be able to see `(venv)` indicator attached to our command line when the virtual environment is activated.

We can also deactivate the virtual environment by:

```sh
deactivate
```

### Use `pip`

After activation, when we fire the `pip` command, all libraries would be installed in the `venv` folder locally.

To install a library `xxx`:

```sh
pip install xxx
```

To show what libraries have been installed:

```sh
pip list
```

or

```sh
pip freeze
```

`pip freeze` would generate in the `pip`-readable format so that if we redirect the output to a file, we can use that file to clone a virtual environment.

```sh
pip freeze > requirements.txt
```

Then, use the `requirements.txt` on a new virtual environment

```sh
pip install -r requirements.txt
```
