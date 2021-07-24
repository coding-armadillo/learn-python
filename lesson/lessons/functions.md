---
title: Functions
tags:
  - Basic
  - Function
prev: ./version-control.md
next: ./modules.md
---

# Functions

<TagLinks />

A function is a block of statements that is written for a specific task.
Using functions allows us to break down our program into small and modular pieces.

We can pass data into a function. A function can return data as well.

## Create a function

We use `def` to define a function.

```python
def say_hello():
    print("hello")
```

We use `return` to specify the return value.

```python
def greeting(name):
    return "hello " + name
```

## Call a function

We call a function by its name followed by parenthesis.

```python
say_hello()

print(greeting("Jack"))
```

## Arguments

Arguments are defined inside the parenthesis when we `def` a function. We can specify any number of arguments, separated by commas.

When we call a function, we need to provide the matching number of arguments.

```python
say_hello("Jack")

print(greeting())

print(greeting("Jack", "Rose"))
```

However if we specify default values, we can call the function without providing those arguments.

Just like the [`get()`](./mapping-data-type.md#functions-of-dict) function of a dictionary.

```python
def greeting(name="Nobody"):
    return "hello " + name

print(greeting())
```

The order of arguments can be changed if we use _keyword arguments_.

```python
def smallest_number(value1, value2, value3):
    print("value1:", value1)
    print("value2:", value2)
    print("value3:", value3)
    return min([value1, value2, value3])

print(smallest_number(10, 213, 2))

print(smallest_number(value3=10, value1=213, value2=2))
```

We can also specify a function to take arbitrary number of arguments.

- Adding `*` before the argument name make it receive a **tuple** of arguments

```python
def smallest_number2(value1, value2, value3, *other_values):
    print("value1:", value1)
    print("value2:", value2)
    print("value3:", value3)
    print("other_values:", other_values)
    return min([value1, value2, value3] + list(other_values))

print(smallest_number2(10, 213, 2, 123, 928, -23, -7661))
```

- Adding `**` before the argument name make it receive a **dictionary** of arguments

```python
def smallest_number3(value1, value2, value3, **other_values):
    print("value1:", value1)
    print("value2:", value2)
    print("value3:", value3)
    print("other_values:", other_values)
    return min([value1, value2, value3] + list(other_values.values()))

print(smallest_number3(10, 213, 2, value7=123, value4=928, value5=-23, value6=-7661))
```

- Arbitrary positional arguments and keyword arguments can be used together

```python
def smallest_number4(value1, value2, value3,*other_values1, **other_values2):
    print("value1:", value1)
    print("value2:", value2)
    print("value3:", value3)
    print("other_values1:", other_values1)
    print("other_values2:", other_values2)
    return min(
        [value1, value2, value3] + list(other_values1) + list(other_values2.values())
    )

print(
    smallest_number4(
        10, 213, 2, 2727, 23, 982, value7=123, value4=928, value5=-23, value6=-7661
    )
)
```

## lambda function

A lambda function is a small anonymous function. It can take any number of arguments, but can only have one statement.

```python
add_10 = lambda value : value + 10
print(add_10(0))
```

```python
multiply = lambda a, b : a*b
print(multiply(5.5, 9.9))
```
