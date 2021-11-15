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

    def charge(self, minutes):
        previous_battery_level = self.battery_level
        self.battery_level = min(100, self.battery_level + minutes / 5)
        if self.battery_level == 100:
            print(
                "Battery is fully charged, taking",
                (100 - previous_battery_level) * 5,
                "minutes",
            )

    def use(self, minutes):
        self.battery_level = max(0, self.battery_level - minutes / 10)


dell = Laptop("dell", "silver")
apple = Laptop("apple", "grey")

apple.charge(5)
dell.charge(20000)

apple.use(60)
dell.use(10000)

print(dell)
print(str(apple))
