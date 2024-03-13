import os


dir_path = os.path.dirname(os.path.realpath(__file__))

# print(dir_path + '\\test2.txt')

#file obgects



# OldSchool method



# # file_obj = open('c:/DI-BootCamp/Week-3/Day4/test.txt', 'a')
# file_obj = open('c:/DI-BootCamp/Week-3/Day4/test2.txt', 'w+')  #  IMPORTANT
# content = file_obj.write('What the crap?\nHow it work?? XD')
# print(content)


# file_obj.close()    #  IMPORTANT

#  NEW method!   COOL!


with open(dir_path + '\\test2.txt', 'r') as file_obj_new:
    # content = file_obj_new.read()
    # file_obj_new.write('hi\nhihi')
    
    # content1 = 
    content2 = file_obj_new.readline()
    file_obj_new.seek(0)
    content_list = file_obj_new.readlines()
    
    

    print(content2)
    print(content_list)
    
# with open('c:/DI-BootCamp/Week-3/Day4/test2.txt', 'r') as file_obj_new: