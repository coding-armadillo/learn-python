class Laptop:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.battery_level = 60

    def __str__(self):
        return (
            f"This is a {self.color} {self.brand.capitalize()} laptop"
            f" with {self.battery_level:.2f}% of battery"
        )


dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

print(dell)
print(str(apple))
