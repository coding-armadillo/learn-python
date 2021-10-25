---
title: How to Make Executables
tags:
  - Basic
  - Pyinstaller
prev: ./another-challenge.md
next: null
---

# How to Make Executables

<TagLinks />

We can use [Pyinstaller](https://www.pyinstaller.org) to package Python scripts into standalone executables. And it works across different platforms.

::: tip More

It's worth noting that `Pyinstaller` can compile to a single executable file, when `--onefile` option is chosen. Also on which OS it is run, it makes matching executable, i.e. .exe when run on Windows

:::

## Getting started

First, we need to install `Pyinstaller` from PyPI

```sh
pip install pyinstaller
```

Then, go to the script folder and run

```sh
pyinstaller script.py
```

The bundle will be generated in a folder called `dist`.

As mentioned above, if we prefer single executable file, include the `--onefile` option.

```sh
pyinstaller script.py --onefile
```

## Assignment 21

Use `Pyinstaller` to make your solution to [Assignment 20](./another-challenge.md#assignment-20)) an executable.
