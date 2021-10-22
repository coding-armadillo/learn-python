---
title: Another Challenge
tags:
  - Basic
  - CSV
prev: ./turtle.md
next: ./make-executable.md
---

# Another Challenge

<TagLinks />

Let's do another coding challenge related to triangle.

## Assignment 20

Create a Python script named `triangle_simulation.py` that prompts the user for a number of triangles to be generated.
Then randomly create triangles and calculate the area of each triangle.

For any random triangle, we only know that one side has length that is within range [10, 100) and another side has length that is within range [20, 90), which means we don't know whether it's acute, right, or obtuse.

Finally create a `triangles.csv` file with the lengths of sides and area information for each triangle.

Here's a list of resources that you need to read before getting started, if you have no clue.

- [Random floating point number in the range \[0.0, 1.0\)](https://docs.python.org/3/library/random.html#random.random)
- [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula)
- [CSV File Writing](https://docs.python.org/3/library/csv.html?highlight=csv#csv.writer)

A sample run looks like the following.

```sh
python triangle_simulation.py
Enter number of triangles: 3
3 triangles generated
```

The `triangles.csv` looks like the following.

```
a,b,c,area
27.371837490898923,64.30764583882535,73.10392131172875,872.5803092319529
53.92225612843062,54.46279074600567,47.28866198862315,1152.8798641166993
67.86950940943723,73.431943006571,30.40005862427104,1031.0399492358679
```

::: details Sample Solution

<<< @/lesson/assignments/triangle_simulation.py

:::
