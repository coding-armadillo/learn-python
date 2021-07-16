salaries = {
    "emp1": {"name": "Austin", "salary": 6500},
    "emp2": {"name": "Bill", "salary": 6500},
    "emp3": {"name": "Katherine", "salary": 8000},
}

salaries["emp2"]["salary"] = 8500
salaries.update({"emp4": {"name": "Dora", "salary": 10000}})

size = len(salaries)
total_salaries = sum([emp["salary"] for emp in salaries.values()])

print(
    f"This company has {size} employees and the average compensation is {total_salaries/size}."
)
