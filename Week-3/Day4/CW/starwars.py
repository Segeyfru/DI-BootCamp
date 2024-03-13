import os

dir_path = os.path.dirname(os.path.realpath(__file__))

# with open(dir_path + '\\starwars.txt', 'r') as file_obj:
#     lines = file_obj.readline()
#     # print(file_obj)
#     # for line in file_obj:
#         # print(line, end='')
#     file_obj.seek(0)
#     content_list = file_obj.readlines()
#     print(content_list[4])

with open(dir_path + '\\starwars.txt', 'r') as file_obj:
    list_strings = file_obj.readlines()
    # words = [[char for char in word.strip()] for word in list_strings]
    # print(words)
     
    darth = 0
    luke = 0
    lea = 0

    for name in list_strings:
        if name.lower().strip('\n') == 'darth':
            darth += 1
        if name.lower().strip('\n') == 'lea':
            lea += 1
        if name.lower().strip('\n') == 'luke':
            luke += 1

    print(darth, lea, luke)
    