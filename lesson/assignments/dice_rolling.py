from collections import Counter
from itertools import product
from random import randint


def get_two_dices():
    num1 = randint(1, 6)
    num2 = randint(1, 6)
    return (num1, num2)


def summarize(rolls):
    result = Counter()
    for num1, num2 in rolls:
        result[num1 + num2] += 1

    return result


number_of_rolls = int(input("Enter Number of Times to Roll the Dices: "))
dice_numbers = range(1, 7)
actual = summarize([get_two_dices() for _ in range(number_of_rolls)])
expected = summarize(product(dice_numbers, dice_numbers))


outputs = []

outputs.append(f"{'Sum':>10}{'Actual %':>20}{'Expected %':>20}")
for num in range(2, 13):
    actual_percent = 100 * actual[num] / number_of_rolls
    expected_percent = 100 * expected[num] / 36
    outputs.append(f"{num:10.0f}{actual_percent:20.2f}{expected_percent:20.2f}")


print("\n".join(outputs))
with open("result.txt", "w") as f:
    f.write("\n".join(outputs))
