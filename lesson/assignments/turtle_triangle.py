import turtle

screen = turtle.getscreen()
screen.title("Green Triangle")

t = turtle.getturtle()
t.color("green", "green")

turtle.begin_fill()
t.goto(100, 40)
t.goto(-50, 80)
t.home()
turtle.end_fill()

turtle.done()
