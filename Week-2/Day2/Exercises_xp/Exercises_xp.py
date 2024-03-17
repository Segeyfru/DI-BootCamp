# Exercise 1 
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = {3,15,8,40}
# my_fav_numbers.add(817)
# my_fav_numbers.add(430)
# my_fav_numbers.remove(817)
# print(my_fav_numbers)
# friend_fav_numbers = {10,18,32,40}
# our_fav_numbers = my_fav_numbers | friend_fav_numbers
# print(our_fav_numbers)

#  Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

            # NO
            
#  Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# basket.remove("Blueberries")
# basket.append('Kiwi')
# basket.insert(0,'Apples')
# print(basket)
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# counter = 0
# for fruit in basket:
#     if fruit == "Apples":
#         counter +=1
# print(counter)

# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

numb_list = [1.5,2,2.5,3,3.5,4,4.5,5]
print(numb_list)
numb_list2 = [x/2 if x % 2 == 0 else (x/2 + 0.5) for x in range(1, 12)]
# num = 1.0
# while num <= 5:
#     list.append(num)
    # num += 0.5\

print(f'List2 {numb_list2}')