import turtle

screen = turtle.getscreen()
screen.title("Red Square")

t = turtle.getturtle()
t.color("red", "red")

turtle.begin_fill()
t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
t.forward(100)
t.home()
turtle.end_fill()

turtle.done()
