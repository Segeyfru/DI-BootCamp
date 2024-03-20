import psycopg2
# import meny_item

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '3526'
DATABASE = 'Week-4_Day4'
PORT = '5432'

class MenuManager:
    @classmethod
    def get_by_name(self, try_name):
        try:

            conn = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORT)  
            cursor = conn.cursor()
            query = f"SELECT * FROM menu_items WHERE item_name = '{try_name}';"

            cursor.execute(query)
            all_rows = cursor.fetchall() 
            list = []
            if len(all_rows) == 0:
                return None
            else:
                for row in all_rows:
                   list.append(row)
                return list
            
        except psycopg2.Error as e:
            print('Error conecting', e)
        finally:
            if conn:
                cursor.close()
                conn.close()
   
    @classmethod
    def all(self):        
        try:
            conn = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORT)  
            cursor = conn.cursor()            
            query = f"SELECT * FROM menu_items;"

            cursor.execute(query)
            all_rows = cursor.fetchall()
            for row in all_rows:
                print(row)
            
        except psycopg2.Error as e:
            print('Error conecting', e)
        finally:
            if conn:
                cursor.close()
                conn.close()
   

# item2 = MenuManager.get_by_name('Burger')
# items = MenuManager.all()


        # try:

        #     conn = psycopg2.connect(
        #         dbname = DATABASE,
        #         user = USERNAME,
        #         password = PASSWORD,
        #         host = HOSTNAME,
        #         port = PORT)  
        #     cursor = conn.cursor()            
        #     query = f"INSERT INTO menu_items(item_name, item_price) VALUES  ('{self.item_name}','{self.item_price}');"

        #     cursor.execute(query)
        #     conn.commit()
        
        # except psycopg2.Error as e:
        #     print('Error conecting', e)
        # finally:
        #     if conn:
        #         cursor.close()
        #         conn.close()
            
                