---
title: A Tiny Challenge
tags:
  - Basic
prev: ./version-control.md
next: ./turtle.md
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
- [Open a file for input/output](https://docs.python.org/3/library/functions.html?#open)

What happens if roll the dice many more times, say 1 million times?

::: details Sample Solution

<<< @/lesson/assignments/dice_rolling.py

:::

### A generic counter

If you are given a list of numbers and told to count the number of appearances for each unique value, what would you do?

Sometimes you may know all the possible values beforehand. For example, you are told that the numbers are integers from 1 to 4 inclusively.
It's very tempting to create some counter variables to represent the number of appearances.

Say, the numbers are stored in a list `some_numbers`, you may start with creating the following variables

```python
number_of_ones = 0
number_of_twos = 0
number_of_threes = 0
number_of_fours = 0
```

then, iterate `some_numbers` to determine the count for each value

```python
for number in some_numbers:
    if number == 1:
        number_of_ones += 1
    if number == 2:
        number_of_twos += 1
    if number == 3:
        number_of_threes += 1
    if number == 4:
        number_of_fours += 1
```

The logic sounds Okay but you **MUST** know all the values and hopefully there are **NOT** a lot of values.
What if there are one thousand or one million possible values in the list?
The code would become a nightmare to maintain.

Now let's step back and distill the core logic behind the counting exercise.
It's simply doing one thing, which is to increment the counter value by one if that number appears.

One edge case you would have to handle is when that number appears for the first time.
In this case, you can set the counter value to 1.

And since the outcome keeps track of a count for each number, we can use `dictionary` as the data type to store the information.
Remind ourselves that a `dictionary` is a collection of key/value pairs.
In the counting use case, we can use a `key` to represent the unique number and the associated `value` to represent the count.

To put the idea in code, you may have

```python{3,5}
result = {}
for number in some_numbers:
    if number not in result:
        result[number] = 1
    else:
        result[number] += 1
```

or, you can consider initializing the value to 0 then increasing by 1

```python{3,4,5}
result = {}
for number in some_numbers:
    if number not in result:
        result[number] = 0
    result[number] += 1
```

In this way, the code is a lot shorter and works in general, with or without the knowledge about what values are possible.

And counting items is a very common action, Python provides a class in the standard library for such purpose.

```python
from collections import Counter

result = Counter(some_numbers)
```

### Formatting with f-string

We can use f-string to naturally construct message.

```python
name = "Jack"
age = 20

print (f'My name is {name} and I am {age} years old.')
```

It also works with functions.

```python
def greeting(name):
    return f"Hello, I'm {name}"

print(f"{greeting('Jill')}")
print(f"{name.lower()}")
```

Or simply values.

```python
print(f"{2**10}")
print(f"{'Hi there'}")
```

We can apply specifiers to better format a string.

1. Length of output and alignment

```python
print(f"{'a':10} **")
```

```python
print(f"{'a':>10} **")
```

```python
print(f"{'a':^10} **")
```

```python
print(f"{100:10} **")
```

```python
print(f"{100:<10} **")
```

```python
print(f"{100:^10} **")
```

2. Decimal points

```python
import math

print(f"{math.pi}")
print(f"{math.pi:.3f}")
print(f"{math.pi:.6f}")
```

3. Using exponent notation

```python
print(f"{math.pi:e}")
print(f"{2**100:.3e}")
```

4. Percentage

```python
print(f"{3/8:%}")
print(f"{1/8:.3%}")
```

### Working with files

We have done a lot `print()` statement to write values in the console. Let's see how we can save the results in a textual file.

To do so, we need a file object by using the `open()` function.
`"result.txt"` is the name of file we are going to write some content into while `"w"` specifies the mode to be `write` for us to perform writing.
The mode is by default `"r"` which only supports read.

```python
f = open("result.txt", "w")
f.write("Hello World!")
f.close()
```

::: tip

It's always a good practice to close any file object you open.

:::

We can also use a context manager to automatically close the file object.

```python
with open("result.txt", "w") as f:
    f.write("Hello World!")
```

Notice that we don't need to manually call `close()` function anymore since the context manager would handle for us.

We can also gather information from a textual file, instead of depending on user input from terminal.

```python
with open("result.txt") as f:
    content = f.read()
```

The `read()` function would everything into a string. If we need to breakdown the reading per line, we can use `readlines()`.

```python
with open("result.txt") as f:
    content = f.readlines()
```

Also note that the file object `f` can be iterated.

```python
with open("result.txt") as f:
    for line in f:
        print(line)
```
