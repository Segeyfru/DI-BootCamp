import psycopg2
import menu_item
import menu_manager

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '3526'
DATABASE = 'Week-4_Day4'
PORT = '5432'

def show_user_menu():
    while True:
        print('View an Item (V)')
        print('Add an Item (A)')
        print('Delete an Item (D)')
        print('Update an Item (U)')
        print('Show the Menu (S)')
        user_input = input('Your choise:  ').capitalize()
        if user_input == 'V':
            user_input2 = input('What item you want to check? ').capitalize()
            item = menu_manager.MenuManager.get_by_name(user_input2)
            if item == None:
                print('There is not items like this')
            else:            
                print(item)
        elif user_input == 'A':
            add_item_to_menu()
        elif user_input == 'D':
            remove_item_from_menu()
        elif user_input == 'U':
            update_item_from_menu()
        elif user_input == 'S':
            item = menu_manager.MenuManager.all()
        elif user_input == 'Q':
            item = menu_manager.MenuManager.all()
            break
            
                 
def add_item_to_menu():
    user_input = input('Type the item’s name and price: ').capitalize()
    name, price = user_input.rsplit(maxsplit=1)
    item = menu_item.MenuItem(name, price)
    item.save()


def remove_item_from_menu():
    user_input = input('What name of item which you want to remove: ').capitalize()
    item = menu_manager.MenuManager.get_by_name(user_input)
    
    if item == None:
        print('Item wasn`t in menu')
    else:
        item1 = menu_item.MenuItem(user_input,0)
        item1.delete()
        print('Item was remove')


def update_item_from_menu():
    user_input1 = input('What item you want to change? Type name and price: ').capitalize()
    name, price = user_input1.rsplit(maxsplit=1)
    item = menu_manager.MenuManager.get_by_name(name)
    if item == None:
        print('Item wasn`t in menu')
    else:
        user_input2 = input('For what you want change it? ').capitalize()
        if check(user_input2):
            item1 = menu_item.MenuItem(name,price)
            item1.update(user_input2)
        else:
            name2, price2 = user_input2.rsplit(maxsplit=1)
            item1 = menu_item.MenuItem(name,price)
            item1.update(name2, price2)
    
def check(string):
    string_without = string.replace(' ','')
    if  all(char.isalpha() for char in string_without):
        return True
    elif all(char.isdigit() for char in string_without):
        return True
    else:
        return False


show_user_menu()
