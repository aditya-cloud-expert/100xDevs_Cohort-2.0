## Key takeaways from this Exercise.

if __name__ == "__main__": 
The above piece of code is the entry point of the program. If you have written it, the code can be executed as Standalone program.
Hence, it is always necessary to write a main() function in the same file.
Utitlity file generally does not have a main() function. It is always executed as a module, by importing into another File or main file.

This Main Folder is always an execution Point. We can import the other files accordingly. While Execution the main.py file , it will be always exected as a module and not as a file.

parent_folder
|--Child1_folder
|   |--__init__.py
|   |--Child1_utility.py
|   |--GrandChild1_folder
|   |  |--GrandChild1_utility.py 
|--main_folder
|   |--__init__.py
|   |--main.py                  


in the above example, 
main.py which is a parent can import siblings and its grandchildren as follows,
--from Child1_folder.Child1_utility import Child1_function 
--from Child1_folder.GrandChild1_folder.GrandChild1_utility import GrandChild1_function

in similar way, GrandChild1_utility.py can be importe it parent and parent's siblings as follows,
--from Child1_folder.Child1_utility import Child1_function
--from main_folder.main import main_function

Here, main.py is the entry point of the program and hence, main() function will be present only in that file.
for this, we may use __name__ == "__main__" in the same file and not any other file.
the command to execute the main.py file is python -m main.main
