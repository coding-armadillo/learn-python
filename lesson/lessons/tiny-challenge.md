---
title: A Tiny Challenge
tags:
  - Basic
prev: ./version-control.md
next: ./tiny-challenge.md
---

# A Tiny Challenge

<TagLinks />

Let's do a tiny coding challenge that requires not only the bits and pieces we have learnt but also some research on new function/module.

## Assignment 14

Create a Python script named `dice_rolling.py` that prompts the user for the number of times to roll the two dices. Calculate the sum of the two dice values and count the percentage of occurrence for each sum value.
The script then prints the result in a tabular format and saves it in a text file.
Compare your actual results with the expectation.

A sample run looks like the following.

```sh
python dice_rolling.py
Enter Number of Times to Roll the Dices: 200
       Sum            Actual %          Expected %
         2                3.50                2.78
         3                7.50                5.56
         4                6.00                8.33
         5               11.00               11.11
         6               14.00               13.89
         7               16.00               16.67
         8               14.00               13.89
         9                8.50               11.11
        10               12.00                8.33
        11                4.00                5.56
        12                3.50                2.78
```

Finally, create a public repository named `dice_rolling` in your GitHub account and push the `dice_rolling.py` script in it.

Here's a list of resources that may be helpful to you.

- [Cartesian product](https://docs.python.org/3/library/itertools.html#itertools.product)
- [Random Integer with in range](https://docs.python.org/3/library/random.html?highlight=randint#random.randint)
- [General Purpose Counter](https://docs.python.org/3/library/collections.html#collections.Counter)
- [A Guide to f-string Formatting in Python](http://cis.bentley.edu/sandbox/wp-content/uploads/Documentation-on-f-strings.pdf)
- [Concatenate a list of Strings](https://docs.python.org/3/library/stdtypes.html#str.join)

What happens if roll the dice many more times, say 1 million times?

::: details Sample Solution

<<< @/lesson/assignments/dice_rolling.py

:::
