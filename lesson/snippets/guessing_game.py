to_play = True
secret = "hello"
while to_play:
    guess = input("what is the secret? ")
    if secret == guess:
        to_play = False
        print("You've got it!")
    else:
        print("Wrong guess :(")
