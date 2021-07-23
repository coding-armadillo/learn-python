---
title: Set Data Type
tags:
  - Basic
  - Data Type
prev: ./mapping-data-type.md
next: ./version-control.md
---

# Set Data Type

<TagLinks />

Python has a data type for sets. Like a list, a set is a collection of items. However sets are unordered and with no duplicates.

Basic usages of a set include membership testing and removing duplicate items. Sets also support mathematical operations like union, intersection, difference, and symmetric difference.

## Set

We also use a pair of `{}` to create a set.
But unlike dictionary where we store key/value pairs, we only put values in it.

```python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)
```

::: tip what about empty sets?

We can use the `set()` function to create an empty set, because `{}` represents an empty dictionary.

```python
empty_set = set()
print(empty_set)
```

:::

### set comprehension

It's just like [list comprehension](./sequence-data-type.md#list-comprehension).

```python
print({fruit.upper() for fruit in basket})
```

```python
print({fruit.capitalize() for fruit in basket if fruit != "banana"})
```

### operators for set

For example, we have two sets:

```python
basket1 = {"apple", "banana", "coconut", "dragon fruit"}
basket2 = {"apple", "pear", "watermelon"}
```

`-` would return items in the left hand set but not in the right hand set,

![](https://www.askpython.com/wp-content/uploads/2020/01/Set-Difference.png)

```python
print(basket1 - basket2)
print(basket2 - basket1)
```

`|` would return all items from both sets (union).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/180px-Venn0111.svg.png)

```python
print(basket1 | basket2)
```

`&` would return items that appear in both sets (intersection)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/180px-Venn0001.svg.png)

```python
print(basket1 & basket2)
```

`^` would return items that appear in only one set.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Venn0110.svg/180px-Venn0110.svg.png)

```python
print(basket1 ^ basket2)
```

We can also use `in` to check if an item exists in a set.

```python
print("apple" in basket1)
print("banana" not in basket2)
```

### functions for set

We use `add()` to add an item to the set.

```python
basket1.add("peach")
print(basket1)

basket1.add("apple")
print(basket1)
```

We use `update()` to add a collections of items to the list.

```python
basket1.update({"peach", "honey melon"})
print(basket1)

basket1.update(["peach", "honey melon"])
print(basket1)
```

We use `intersection()` to get items that appear in both sets, just like the `&` operator.

```python
print(basket1.intersection(basket2))
print(basket2.intersection(basket1))
```

We use `union()` to get all items from both sets, just like the `|` operator.

```python
print(basket1.union(basket2))
print(basket2.union(basket1))
```

We use `symmetric_difference()` to get items that appear in only one set, just like the `^` operator.

```python
print(basket1.symmetric_difference(basket2))
print(basket2.symmetric_difference(basket1))
```

We use `difference()` to get te items that only appear in itself but not the other set, just like the `-` operator.

```python
print(basket1.difference(basket2))
print(basket2.difference(basket1))
```

We use `issuperset()` / `issubset()` to check if it's the super / sub set of another set.

![](https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/08/03120034/subset.jpg)

```python
print(basket2.issuperset(basket1))
print(basket2.issubset(basket1))

print(basket1.issuperset({"apple"}))
print(basket2.issubset({"apple", "pear", "watermelon", "mango"}))
```

We use `pop()` to remove a random item from a set.

```python
basket2.pop()
print(basket2)
```

We use `discard()` to remove a given item from a set.

```python
basket1.discard("apple")
print(basket1)

basket1.discard("shoe")
print(basket1)
```

We use `clear()` to remove all items from a set.

```python
basket1.clear()
print(basket1)
```
