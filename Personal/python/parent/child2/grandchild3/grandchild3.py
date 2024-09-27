from child1.grandchild2.grandchild2 import grandchild2function
from child1.grandchild1.grandchild1 import grandchild1function

def grandchild3function():
    grandchild2function()
    print("grandchild3")
    simple_function()

def simple_function():
    print("-------------------")
    grandchild1function()
    print("-------------------")

if __name__ == "__main__":
    grandchild3function()