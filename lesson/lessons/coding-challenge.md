---
title: Coding Challenge
tags:
  - Coding Challenge
prev: ./make-executables.md
next: null
---

# Coding Challenge

<TagLinks />

It's very common to participate in coding challenge when you interview for an intern or fulltime position. Today you will try to solve one using the knowledge we have learned so far.

Have fun :)

## Assignment 22

This is a classic [LeetCode](https://leetcode.com) problem. Try not to search in the internet for solution.

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

**Example 1:**

    Input: s = "()"
    Output: true

**Example 2:**

    Input: s = "()[]{}"
    Output: true

**Example 3:**

    Input: s = "(]"
    Output: false

**Example 4:**

    Input: s = "([)]"
    Output: false

**Example 5:**

    Input: s = "{[]}"
    Output: true

Create a script named `valid_parentheses.py`. Inside the script, create a function named `is_valid` that takes one argument and returns `True`/`False` depends on the previous setting. Test your function to see if it works for the 5 examples above.

You can use the following codes for testing

```python
assert is_valid("()") is True
assert is_valid("()[]{}") is True
assert is_valid("(]") is False
assert is_valid("([)]") is False
assert is_valid("{[]}") is True
```

You can include more test cases if you prefer.

If you like these types of challenge, feel free to register an account and practice on your own. There's another famous similar site, [HackerRank](https://www.hackerrank.com/).
