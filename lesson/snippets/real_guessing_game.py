from random import randint

to_play = True
secret = str(randint(1, 100))
while to_play:
    guess = input("what is the secret (1-100)? ")
    if secret == guess:
        to_play = False
        print(f"You've got it!")
    else:
        print(f"Wrong guess :( it's {'smaller' if secret < guess else 'larger'}")
