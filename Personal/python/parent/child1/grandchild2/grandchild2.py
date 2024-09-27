from child1.grandchild1.grandchild1 import grandchild1function
def grandchild2function():
    grandchild1function()
    print("grandchild2")

if __name__ == "__main__":
    grandchild2function()
    