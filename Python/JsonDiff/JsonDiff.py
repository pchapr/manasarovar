from deepdiff import DeepDiff
import matplotlib.pyplot as plt

json1 = {
    "users": [
        {"id": 1, "name": "Alice", "age": 30},
        {"id": 2, "name": "Bob", "age": 25}
    ],
    "server": "prod-01"
}

json2 = {
    "users": [
        {"id": 1, "name": "Alice", "age": 31},  # Age changed
        {"id": 3, "name": "Charlie", "age": 40}  # New user added
    ],
    "server": "prod-02"  # Server changed
}

diff = DeepDiff(json1, json2)
print(diff)

# Extract the 'age' values that have changed
if 'values_changed' in diff:
    changed_ages = [item['new_value'] for key, item in diff['values_changed'].items() if 'age' in key]

    # Create a simple line plot
    plt.plot(changed_ages)
    plt.xlabel("User Index")
    plt.ylabel("Age")
    plt.title("Changes in User Ages")
    plt.show()