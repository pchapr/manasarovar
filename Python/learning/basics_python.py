# Simple variables and printing them
name = 'John Doe'
age = 30
print("Name:", name)
print("Age:", age)

#python types with type annotations - This is helpful
name: str = "John Doe"
age: int = 45
weight: float = 172.5
is_over_40: bool = True

#Mutable list
names: list = ['Alice', 'Bob', 'Charlie']
# Immutable tuple
continues: tuple = ('Alice', 'Bob', 'Charlie')
# Set with unique values
unique_numbers: set = {1, 2, 3, 4, 5}
# Dictionary with mixed types
person: dict = {
    'name': 'John Doe',
    'age': 30,
    'is_student': False
}

from typing import Final
# constants
VERSION: Final[str] = "1.0.0"
PI: Final[float] = 3.14159
print("Version:", VERSION)
print("PI:", PI)

from datetime import datetime
# Current date and time
current_time: datetime = datetime.now()
# Print the current date and time
print("Current date and time:", current_time)

#Creating a function
def show_date() -> None:
    """Function to print the current date."""
    current_date: datetime = datetime.now()
    print("Current date:", current_date.strftime("%Y-%m-%d"))

show_date()

def add_numbers(a: int, b: int) -> int:
    """Function to add two numbers."""
    return a + b

print("Adding two numbers:", add_numbers(5, 10))
print("Adding two numbers:", add_numbers(5.25, 10))

#Classes and objects
class Person:
    """A simple class to represent a person."""
    
    def __init__(self, name: str, age: int) -> None:
        """Initialize the person with a name and age."""
        self.name = name
        self.age = age
    
    def greet(self) -> str:
        """Method to greet the person."""
        return f"Hello, my name is {self.name} and I am {self.age} years old."
    
    def birthday(self) -> None:
        """Method to celebrate a birthday."""
        self.age += 1
        return self.age
    
    def __main__(self) -> None:
        """Main method to run the class."""
        print(self.greet())
        print("Age after birthday:", self.birthday())

# Creating an instance of the Person class
john: Person = Person("John Doe", 30)
print(john.greet())
print("John's increase age due to birthday:", john.birthday())
print("John's increase age after birthday:", john.birthday())

john.__main__()