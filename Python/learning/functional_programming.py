# Functional programming concepts in Python
# import logging

#functions a first class citizens
def greet():
    """Function to greet."""
    return "Hello, World!"

print("Greeting:", greet())

def shout(func):
    """Function to shout a greeting."""
    return func().upper() + "!!!"

#Passing the reference to the greet function not call the greet function
print("Shouting:", shout(greet))


#Functions returning functions
def outer_func(x) -> callable:
    """Outer function that returns an inner function."""
    def inner_func(y):
        """Inner function that calls the passed function."""
        return y + x
    return inner_func

add_five = outer_func(5)
print("Type of the function: ", type(add_five))
print("Adding five:", add_five(10))  # Output: 15

def subtract(x, y):
    """Function to subtract two numbers."""
    return x - y

def reverse_args(func):
    """Function that reverses the operation of the passed function."""
    def wrapper(x, y):
        """Wrapper function to reverse the operation."""
        return func(y, x)
    return wrapper

reverse_func = reverse_args(subtract)
print("Subtracting 10 from 5:", reverse_func(5, 10))  # Output: -5

def add(x, y):
    """Function to add two numbers."""
    return x + y

def multiply(x, y):
    """Function to multiply two numbers."""
    return x * y
def divide(x, y):
    """Function to divide two numbers."""
    if y == 0:
        raise ValueError("Cannot divide by zero")
    return x / y

nums = [1, 2]

num_funcions = [add, subtract, multiply]

for func in num_funcions:
    print(f"Function: {func.__name__}")
    result = func(*nums)
    print(f"Result of {func.__name__} on {nums[0]} and {nums[1]}: {result}")

operations = {
    'a': add,
    's': subtract,
    'm': multiply,
    'd': divide,
}

# operation_name = input("Enter the operation you want to perform (a/s/m/d): ")
# x = float(input("Enter the first number: "))
# y = float(input("Enter the second number: "))

# operation = operations.get(operation_name)
# if operation:
#     result = operation(x, y)
#     print(f"Result of {operation_name} on {x} and {y}: {result}")
# else:
#     print("Invalid operation.")

# Heigher order functions
# Takes one or more functions as arguments and returns a new function
def double(x) -> float:
    """Function to double a number."""
    return x * 2
def apply_function(func, value):
    """Function to apply a function to a value."""
    return func(value)
result = apply_function(double, 5)
print("Result of applying double function:", result)  # Output: 10

# HOF -> take a function and return a new function

def retry(func, retries=3):
    """Decorator to retry a function a specified number of times."""
    def wrapper(*args, **kwargs):
        for _ in range(retries):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                print(f"Error: {e}. Retrying...")
        raise Exception("Function failed after retries.")
    return wrapper

def unreliable_function():
    """Function that may raise an exception."""
    import random
    if random.choice([True, False]):
        raise ValueError("Random failure!")
    return "Success!"

return_value = retry(unreliable_function, retries=3)()
print("Return value after retries:", return_value)  # Output: Success! or Exception message

# pure functions - functions that do not have side effects and always return the same output for the same input
def pure_function(x):
    """Pure function that returns the square of a number."""
    return x * x

def impure_function(x):
    """Impure function that modifies a global variable."""
    global counter
    counter += 1
    return x * x

#Eager and Lazy evaluations
eager_squares = [x* x for x in range(10)]
print("Eager evaluation:", eager_squares)

lazy_squares = (x * x for x in range(10))
print("Lazy evaluation:", lazy_squares)
for square in lazy_squares:
    print("Lazy square:", square)

#chaining lazy functions
def lazy_even(numbers):
    """Generator function to yield even numbers."""
    for number in numbers:
        if number % 2 == 0:
            yield number

gen_func = lazy_even(range(10))
print("Lazy even numbers:", gen_func)
print("First even number:", next(gen_func))  # Output: 0
print("Next even number:", next(gen_func))  # Output: 2

def lazy_square(number):
    """Function to yield the square of a number."""
    for i in number:
        yield i ** 2

event_suqares = lazy_square(lazy_even(range(10)))
print("Lazy even squares:", event_suqares)
print("First even square:", next(event_suqares))  # Output: 0
print("Next even square:", next(event_suqares))  # Output: 4
print("Next even square:", next(event_suqares))  # Output: 16



