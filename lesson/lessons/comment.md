---
title: Comments
tags:
  - Basic
  - Comment
prev: ./operator.md
next: false
---

# Commenting your Python Codes

<TagLinks />

Comments start with a `#`, and Python will consider rest of the line as a comment.

We can start a new line.

```py
# This is a comment.
print("Hello, World!")
```

Or comment at the end.

```py
print("Hello, World!") # This is also a comment.
```

Comments can be used to explain purpose or logic of the codes, for yourself or your peers who may work on the same piece of codes.
Consider writing comments if the codes are not easy to understand (e.g., algorithm being complicated or logic being complex).

However, writing self-explained codes is also critical in practice.

So instead of

```py
a = 100 # investment
b = .03 # interest rate
d = 20 # years
d = a * (1 + b) ** c #  net return
print(d)
```

Do this

```py
init_amount = 100
rate = .03
years = 20
net_return = init_amount * (1 + rate) ** years
print(net_return)
```
