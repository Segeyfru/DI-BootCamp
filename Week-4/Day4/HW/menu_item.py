import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '3526'
DATABASE = 'Week-4_Day4'
PORT = '5432'


class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price
    
    def save(self):        
        try:
            conn = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORT)  
            cursor = conn.cursor()            
            query = f"INSERT INTO menu_items(item_name, item_price) VALUES  ('{self.item_name}','{self.item_price}');"

            cursor.execute(query)
            conn.commit()
            print('item was added successfully')
            
        except psycopg2.Error as e:
            print('Error conecting', e)
        finally:
            if conn:
                cursor.close()
                conn.close()
                
    def delete(self):
        try:
            conn = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORT)  
            cursor = conn.cursor()            
            query = f"DELETE FROM menu_items WHERE item_name = '{self.item_name}';"

            cursor.execute(query)
            conn.commit()
            
        except psycopg2.Error as e:
            print('Error conecting', e)
        finally:
            if conn:
                cursor.close()
                conn.close()

    def update(self, *update_things):
        try:
            conn = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORT)  
            cursor = conn.cursor()
            for update_thing in update_things:
                if isinstance(update_thing,str):
                    query = f"UPDATE menu_items SET item_name = '{update_thing}' WHERE  item_name = '{self.item_name}';"
                    self.item_name = update_thing
                    cursor.execute(query)
                    conn.commit()

                elif isinstance(update_thing,int):
                    query = f"UPDATE menu_items SET item_price = '{update_thing}' WHERE  item_name = '{self.item_name}';"
                    self.item_price = update_thing
                    cursor.execute(query)
                    conn.commit()

        except psycopg2.Error as e:
            print('Error conecting', e)
        finally:
            if conn:
                cursor.close()
                conn.close()

# item1 = MenuItem('Veggie Burger', 37)
# item1.save()
# item1.delete()
# item1.update('BIG-Burger')
# item1.update('Super_Burger')
# item1.update(65)
# print(item1.item_name)
# print(item1.item_price)