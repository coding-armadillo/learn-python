class Laptop:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.battery_level = 60


dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

print(dell.brand, dell.color)
print(apple.brand, apple.color)
