---
title: Mapping Data Type
tags:
  - Basic
  - Data Type
prev: ./sequence-data-type.md
next: ./set-data-type.md
---

# Mapping Data Type

<TagLinks />

In Python there is a mapping type called dictionary (`dict` for short).
It is used to associate (map) keys (names) to some arbitrary values (objects).

![](https://im-media.voltron.voanews.com/Drupal/01live-166/styles/892x501/s3/2019-04/00828C8B-CA04-42A3-B40A-33CA36B69C3D.jpg?itok=hjQ8EFZo)

Just like the idea of Yellow pages,
where we can easily look for a plumber's phone number,
with the help of a `dict` we access the values within the dictionary by the names.

## Dict

`dict` is constructed by key/value pairs. We use `{}` to denote a dictionary and `:` to separate a pair of key and value.

Say, we are to create a dictionary for contact numbers.

```python
contacts = {
  "Jack": "1234567890",
  "Jill": "4567890123",
  "John": "7890123456",
  "Jane": None,
}
```

### access values in the dict

We can access each of the values stored in a `dict` by its key.

```python
print(contacts["Jack"])
print(contacts["Jane"])
```

We can not only read values from a `dict` but also modify them.

```python
contacts["Jane"] = "111222333"
contacts["Jack"] = "1234567890 #1"
```

### functions of dict

We use `len()` to get the number of items in a dictionary.

```python
print(len(contacts))
```

We use `keys()` to get all the keys from a dict.

```python
print(contacts.keys())
```

Similarly we use `values()` to get all the values from a dict.

```python
print(contacts.values())
```

We can use `items()` to get all the `(key, value)` pairs.

```python
print(contacts.items())

print(list(contacts.items()))
```

We use `get(key[, default])` to get the value from a dict.
If the `key` does not exist in the dictionary, it will return the `default` value.

Note that `default` is optional, the default value of `default` is `None`.

```python
print(contacts.get("Jack"))
print(contacts.get("Oscar"))
print(contacts.get("Tim", "2223334444"))
```

We can use `update([other])` to update the key/value pairs from the `other` dictionary.

```python{1,4,7}
contacts.update()
print(contacts)

contacts.update({"Penny": "8882229999"})
print(contacts)

contacts.update({"Penny": "4441113333"})
print(contacts)
```

We can use `pop(key[, default])` to remove an item from a dictionary.
The associated value will return.
If the `key` does not exist in the dictionary, `default` will return if it is given.
Otherwise, an error will raise.

```python
number = contacts.pop("Jack")
print(number)
print(contacts)

default_number = contacts.pop("Adam", "000")
print(default_number)

contacts.pop("Daisy")
```

We can use `copy()` to create a **shallow** copy of the dictionary.

```python
duplicate = contacts
duplicate["John"] = "7890123456 #111"
print(duplicate)
print(contacts)

duplicate = contacts.copy()
duplicate["John"] = "7890123456"
print(duplicate)
print(contacts)
```

::: warning what does shallow mean?

We will talk about the difference between by reference and by value in future.

:::

We can use `clear()` to remove all items in a dictionary.

```python
contacts.clear()
print(contacts)
```

### operators for dict

`|` would merge keys and values of two dictionaries. However the values of the dictionary on the right hand side of `|` has higher priority for same keys.

```python{3}
a = {1: "a"}
b = {2: "b", 3: "c", 1: "d"}
c = a | b
print(c)
```

And we can chain `|` with `=` to assign the new dictionary to the original dictionary.

```python{3}
a = {1: "a"}
b = {2: "b", 3: "c", 1: "d"}
a |= b
print(a)
```

We can use `in` to check if a key exists in a dictionary

```python
print(1 in {1: "a"})
print(100 in {1: "a"})
```

### iterate the dict

We can use the `for` loop to iterate the dictionary.

```python{1}
for name in contacts:
    print(f"{name}'s phone number is {contacts[name]}.")
```

key/value pairs can be retrieved together.

```python{1}
for name, number in contacts.items():
    print(f"{name}'s phone number is {number}.")
```

### create a dict from list

We can also create a dictionary from a list, if the list contains key/value pairs.

For example,

```python
pairs = [
    ("Jack", "1234567890"),
    ("Jill", "4567890123"),
    ("John", "7890123456"),
    ("Jane", None),
]
contacts = dict(pairs)
```

If we have keys and values in two separate lists, we can first generate a list of key/value pairs, then convert to dictionary.

```python
names = ["Jack", "Jill", "John", "Jane"]
numbers= ["1234567890", "4567890123", "7890123456", None]
contacts = dict(zip(names, numbers))
```

::: tip what about zip?

It makes an iterator that aggregates elements from each of the iterables. See [reference](https://docs.python.org/3/library/functions.html#zip).

```python
a = range(10)
b = range(20, 30)
c = range(40, 50)
z = zip(a, b, c)
print(list(z))
```

:::

### complex dictionary

The key/value pairs in a dictionary can be complex to fit your needs.
Say you need to the `contacts` dictionary to store only the phone number but also address.

<<< @/lesson/snippets/contacts.py

Or we can create a `grade_book` dictionary to keep track of the grades for a total of 5 courses.

<<< @/lesson/snippets/grade_book.py

## Assignment 11

Create a Python script named `salaries.py` and then put the following dictionary in it.

```python
salaries = {
    "emp1": {"name": "Austin", "salary": 6500},
    "emp2": {"name": "Bill", "salary": 6500},
    "emp3": {"name": "Katherine", "salary": 8000},
}
```

Next, please change Bill's salary to 8500 and add another employee (emp4) to the `salaries` dictionary. emp4's name is Dora and her salary is 10000.

Finally, calculate and print the total number of employees and the average salary.

A sample run looks like the following.

```sh
python salaries.py
This company has 4 employees and the average compensation is 8250.0.
```

::: details Sample Solution

<<< @/lesson/assignments/salaries.py

:::
