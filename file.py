# This is a single-line comment

"""
This is a multi-line comment.
It can span multiple lines.
"""

# Function definition with comments
def example_function(param1, param2):
    """
    This function takes in two parameters, param1 and param2.
    It performs some operation based on the input parameters.
    """
    # This is a comment within a function
    result = param1 + param2  # This is an inline comment
    return result

# Code block with comments
if True:
    # This is a comment inside an if block
    print("This is inside the if block.")

# Another multi-line comment
'''
This is another way of creating a multi-line comment.
It is similar to using triple double quotes.
'''

# Commented out code
# print("This line is commented out.")

# A comment at the end of a line
x = 5  # This is the value of x

# Docstring for the entire script
"""
This is a docstring for the entire script.
It provides an overview of the purpose of the script.
"""

print(example_function(3, 4))  # Calling the example_function with arguments 3 and 4
