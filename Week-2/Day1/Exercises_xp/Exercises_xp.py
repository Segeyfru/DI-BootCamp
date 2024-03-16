# Exercise 1
# Instructions
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

# print('''
#       Hello World!
#       Hello World!
#       Hello World!
#       Hello World!
#       ''')

# print('\tHello World!\nHello World!\nHello World!')

# Exercise 2
# Instructions
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

# pover = 99**3 * 8
# print(pover)

# print((99**3)*8)

# Exercise 3

# # Predict the output of the following code snippets:
# # >>> 5 < 3
# False
# # >>> 3 == 3
# True
# # >>> 3 == "3"
# False
# # >>> "3" > 3
# False
# # >>> "Hello" == "hello"
# False



# Exercise 4
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

# computer_brand = 'Lenovo'
# print(f'I have a "{computer_brand}" computer')

# Exercise 5
# Instructions
# ....
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.

# name = "Sergey"
# age = 27
# shoe_size = 43
# info = f'\tHi!\nMy name is {name}.\nI`m {age}.\nMy shoe size is "{shoe_size}".'
# print(info)

# Exercise 6
# Instructions
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

# a = 30
# b = 45
# if a > b:
#     print('Hello World!\n a is bigger')
# else:
#     print('Bay-Bay World!(\n b is bigger')

# Exercise 7
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

# user_input = int(input('Write a number: '))
# check = user_input % 2
# # print(check)
# if check == 0:
#     print(f'Number "{user_input}" is EVEN')
# else:
#     print(f'Number "{user_input}" is ODD')

# Exercise 8
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

# name = 'Sergey'
# user_name = input('What is your name? ').capitalize()
# # print(user_name)
# if name == user_name:
#     print('WOW! We have the same names!')
# else:
#     print(f'Nice to meet you! My name is {name}.')
    
# Exercise 9
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

# user_height = int(input('What is your height is centimeters? '))
# if user_height < 145:
#     print('Sorry! You have to grow up some more to ride.')
# elif user_height >= 145:
#     print('Good! You are tall enough to ride.')
   
