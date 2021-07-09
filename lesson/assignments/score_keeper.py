size = int(input("Enter number of scores: "))

scores = []
for i in range(size):
    score = float(input("Enter score: "))
    scores.append(score)

print("Average score is", sum(scores) / size)
