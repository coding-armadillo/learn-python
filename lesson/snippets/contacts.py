contacts = {
    "John": {
        "number": "1234567890",
        "address": "123 main st",
    },
    "Jack": {
        "number": "4567890123",
        "address": "456 main st",
    },
}

print(contacts)

for name, d in contacts.items():
    print(f"{name}'s phone number is {d['number']}.")
