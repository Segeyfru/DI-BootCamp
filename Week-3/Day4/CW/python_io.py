import os

dir_path = os.path.dirname(os.path.realpath(__file__))

#file objects

#old school way: problem is to explicit close the file
# file_obj = open('c:/Users/julia/Desktop/Repositories/DI-Bootcamp-TTA11/week3/day4/test.txt', 'a')
# # content = file_obj.read()
# content = file_obj.write('\nHello there, added')
# print(content)
# file_obj.close()

#best practice: use context manager: 'with'

# with open('c:/Users/julia/Desktop/Repositories/DI-Bootcamp-TTA11/week3/day4/test.txt', 'w+') as file_obj:
#     file_obj.write('another example')
#     file_obj.seek(0) #taking the cursos again to the first line
#     content = file_obj.read() #return a string
#     print(repr(content))

#reading methods
with open(dir_path + '\\test.txt', 'r') as file_obj:
    content1 = file_obj.read(20)
    content2 = file_obj.readline() #returns a string
    file_obj.seek(0)
    content_list = file_obj.readlines() #returns a list
    print(content_list[1:3])

