import random
print('The string must be 10 characters long/')
user_string = input('Write your string here: ')
if len(user_string) < 10:
    print("\n\tThe string not long enough\n")
elif len(user_string) > 10:
    print("\n\tThe string too long\n")
elif len(user_string) == 10:
    print("\n\tPerfect string\n")
    print('"' + user_string[0] + '", "' + user_string[9] +'"')
    print('\n\tNext Task\n')
    new_string = ''
    for char in user_string:
        new_string += char #user_string[char]
        print(new_string)
    print('\n\tNext Task\n')
    new_list = list(new_string)
    random.shuffle(new_list)
    new2_string = "".join(new_list)
    print(new2_string)
