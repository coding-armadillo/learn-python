---
title: Sequence Data Type
tags:
  - Basic
  - Data Type
prev: ./control-flow.md
next: ./mapping-data-type.md
---

# Sequence Data Type

<TagLinks />

Sequential data types can be used to store an array of values.

For example, if you want to represent all the game titles that you collect, you don't need to create an individual variable for each of your game. You can specify a variable of sequential data type to store all games.

## List

`list` is a primitive sequential data type in Python.

To create a `list` variable for our games,

<<< @/lesson/snippets/list_of_games.py

A pair of `[]` denotes a `list`. It can hold various values. In the example above, `games` is a `list` that holds some strings.

### access values in the list

We can access each of the values stored in a `list` by its index. Again, Python follows 0-indexed, meaning indices start with 0.

The first item of a `list` has index of 0. The n-th item of a `list` has index of `n-1`.

```python
print(games[0])
print(games[2])
```

Python also supports negative index. `-1` refers to the last item, `-2` refers to the second last item, so on and so forth.

```python
print(games[-1])
print(games[-3])
```

We can not only read values from a `list` but also modify them.

```python
games[2] = "Grand Theft Auto VI"
games[-1] = "Pokemon Go"
print(games)
```

### built-in functions for list

We can use `len()` to get the length of a list, a.k.a. the number of items in that list.

```python
print(len(games))
```

If we have a list of numbers, there are handy built-in functions to get simple statistics.

For example, we have

<<< @/lesson/snippets/list_of_numbers.py

We can use `max()`, `min()`, and `sum()` to get the largest number, smallest number, and summation of all numbers, respectively.

```python
print(max(numbers))
print(min(numbers))
print(sum(numbers))
```

### operators for list

`+` would concat two lists together

<<< @/lesson/snippets/list_add.py

`*` would duplicate the list for a given amount of times

<<< @/lesson/snippets/list_multiply.py

### functions of list

`list` also comes with functions and attributes. To access them, we use the `.` to access its own functions/attributes.

```python
games.reverse()
print(games)
```

`reverse()` is a general function of `list` that reverse the order of all items in it.

We use `append()` to add an item at the end of a list.

```python{1}
games.append("Super Smash Bros.")
print(games)
```

We use `extend()` to add more items at the end of a list, where you put those items in a list.

```python{1}
games.extend(["FIFA 20", "Plants vs. Zombies"])
print(games)
```

We use `clear()` to empty all items from the list.

```python{1}
games.clear()
print(games)
```

We use `remove()` to delete the first match of an item from the list.

```python{1}
games.remove("The Legend of Zelda")
print(games)
```

```python{2}
l = [1, 2, 3] * 2
l.remove(3)
print(l)
```

We use `pop()` to delete the last item from the list.

```python{2}
animals = ['cat', 'dog', 'rabbit', 'guinea pig']
animals.pop()
print(animals)
```

We use `insert()` to add item at a given location of the list.

```python{1}
animals.insert(0, "guinea pig")
print(animals)
```

We use `index()` to get the index of the first match of an item in the list.

```python
print(animals.index("cat"))
```

```python
print((animals * 3).index("cat"))
```

We use `count()` to get number of times the an element appears in the list.

```python
print(animals.count("cat"))
```

```python
print((animals * 3).count("cat"))
```

### list comprehension

To get all letters in a string and store them in a list

<<< @/lesson/snippets/get_letters_loop.py

A more Pythonic way to achieve this task is as follow.

<<< @/lesson/snippets/get_letters.py{1}

To get all non-vowel letters in the string

<<< @/lesson/snippets/get_letters_filter.py

To get all odd numbers from 1 to 100

```python
print([i for i in range(1, 101) if i % 2])
```

To multiply all numbers by 5 in the list

```python
print([i * 5 for i in range(1, 101)])
```

## Tuple

`tuple` is very similar with `list` except that the items in the tuple cannot be changed.

To create a `tuple` variable we use a pair of `()`

<<< @/lesson/snippets/tuple.py

However, Python would throw an error (`TypeError: 'tuple' object does not support item assignment`) if we try to modify the item in the tuple.

```python
awesome_collection[0]="NBA 2K21"
```

### functions of tuple

We can `dir()` to list all attributes and functions of a specified object. See what's available for `tuple`.

## Assignment 10

Create a Python script named `score_keeper.py` that would prompt the user for the number of scores it's going to keep. Then it asks the user to enter a numeric value score for that given number of times. Finally it displays the average of of the scores.

Please use `list` in the solution. A sample run looks like the following.

```sh
python score_keeper.py
Enter number of scores: 3
Enter score: 100
Enter score: 99
Enter score: 60
Average score is 86.33333333333333
```

::: details Sample Solution

<<< @/lesson/assignments/score_keeper.py

:::
