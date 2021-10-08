import turtle as t
from random import randint

screen = t.getscreen()
screen.title("Turtle Race")

t1 = t.getturtle()
t2 = t.Turtle()

t1.penup()
t1.goto(0, 50)
t1.pendown()

t1.shape("turtle")
t2.shape("turtle")

t1.color("blue", "blue")
t2.color("green", "green")

distance_t1, distance_t2, length = 0, 0, 200

while distance_t1 < length and distance_t2 < length:
    move_t1 = randint(1, 6)
    move_t2 = randint(1, 6)

    t1.forward(move_t1)
    t2.forward(move_t2)

    distance_t1 += move_t1
    distance_t2 += move_t2

if distance_t1 >= length and distance_t2 >= length:
    title = "It's a tie."
elif distance_t1 >= length:
    title = "Blue Turtle won!"
else:
    title = "Green Turtle won!"

t.title(title)
t.done()
