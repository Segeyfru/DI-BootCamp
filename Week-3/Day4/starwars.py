import os


dir_path = os.path.dirname(os.path.realpath(__file__))




with open(dir_path + '\\starsnames.txt', 'a+') as txt_file:
    txt_file.seek(0)
    
    # for line in txt_file:    
    #     print(line, end= '')
    
    # line_5 = txt_file.readlines()
    # print(line_5[4])
    
    # first_5 = txt_file.read(5)
    # print(first_5)
    
    list_string = txt_file.readlines()
    # words = [[char for char in word.strip()] for word in list_string]
    # print(words)
    
    
    
    
    # Darth = 0
    # Luke = 0
    # Lea = 0
    # for line in list_string:        
    #     if line == 'Darth\n':
    #         Darth +=1
    #     elif line == "Lea\n":
    #         Lea +=1
    #     elif line == "Luke\n":            
    #         Luke +=1
    
    # print(f'Darth: {Darth}, Lea: {Lea}, Luke: {Luke}')    
        
            
    # txt_file.write('\nSergey Fruman')
    
    
    for line in list_string:
        if line == "Luke\n":
            txt_file.insert(line, 'SkyWalker')
            print(line, end='')
    